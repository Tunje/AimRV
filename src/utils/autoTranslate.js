// Auto-translation utility for handling missing translations
import { getTextContent, updateTextContent } from '../firebase/textContent';

/**
 * Checks if content needs translation and translates it if needed
 * @param {string} key - The content key
 * @param {Object} textContent - The current text content
 * @param {string} targetLanguage - The language to translate to
 * @param {Function} translateFn - The translation function to use
 * @returns {boolean} - Whether translation was performed
 */
export const checkAndTranslateContent = async (key, textContent, targetLanguage, translateFn) => {
  // Skip if the content doesn't exist at all
  if (!textContent[key]) return false;
  
  // Check if content is multilingual
  if (typeof textContent[key] === 'object' && textContent[key]._isMultilingual) {
    // Check if the target language content is missing
    if (!textContent[key][targetLanguage] && textContent[key].sv) {
      // Get the Swedish content as source
      const sourceText = textContent[key].sv;
      
      // Translate the content
      const translatedText = await translateFn(sourceText, targetLanguage);
      
      // Update the content in the database
      await updateTextContent(key, translatedText, targetLanguage);
      
      // Return true to indicate translation was performed
      return true;
    }
  } else {
    // Handle legacy content (not multilingual)
    // Convert to multilingual structure and translate
    const sourceText = textContent[key];
    if (sourceText) {
      const translatedText = await translateFn(sourceText, targetLanguage);
      
      // Create multilingual structure with both languages
      const multilingualContent = {
        sv: sourceText,
        [targetLanguage]: translatedText,
        _isMultilingual: true
      };
      
      // Update with the full multilingual structure
      await updateTextContent(key, multilingualContent);
      
      return true;
    }
  }
  
  return false;
};

/**
 * Automatically translates all missing content for a given language using batch processing
 * @param {Object} textContent - The current text content
 * @param {string} targetLanguage - The language to translate to
 * @param {Function} translateFn - The translation function to use
 * @returns {number} - Number of items translated
 */
export const translateAllMissingContent = async (textContent, targetLanguage, translateFn) => {
  if (targetLanguage === 'sv') return 0; // No need to translate Swedish content
  
  // Find keys that need translation
  const keysToTranslate = Object.keys(textContent).filter(key => {
    // Skip internal properties
    if (key.startsWith('_')) return false;
    
    // Check if content needs translation
    if (typeof textContent[key] === 'object' && textContent[key]._isMultilingual) {
      // Needs translation if target language content is missing but Swedish content exists
      return !textContent[key][targetLanguage] && textContent[key].sv;
    } else {
      // Legacy content (not multilingual) needs translation if it exists
      return !!textContent[key];
    }
  });
  
  // Process translations in batches of 10 for better performance
  const batchSize = 10;
  let translatedCount = 0;
  
  for (let i = 0; i < keysToTranslate.length; i += batchSize) {
    const batch = keysToTranslate.slice(i, i + batchSize);
    
    // Process batch in parallel
    const results = await Promise.all(
      batch.map(key => checkAndTranslateContent(key, textContent, targetLanguage, translateFn))
    );
    
    // Count successful translations
    translatedCount += results.filter(result => result).length;
  }
  
  return translatedCount;
};
