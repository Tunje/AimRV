import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useText } from '../context/TextContext';

/**
 * Component that updates meta tags in the document head based on the current route
 * Uses the meta texts and sharing images stored in TextContext
 */
const MetaUpdater = () => {
    const location = useLocation();
    const { textContent } = useText();
    const path = location.pathname;

    useEffect(() => {
        // Determine which page we're on based on the path
        let pageName = 'home';
        
        if (path.includes('/om-oss')) {
            pageName = 'om-oss';
        } else if (path.includes('/regler')) {
            pageName = 'regler';
        } else if (path.includes('/senaste-nytt')) {
            pageName = 'senaste-nytt';
        } else if (path.includes('/ulricehamn')) {
            pageName = 'ulricehamn';
        } else if (path.includes('/hemsedal')) {
            pageName = 'hemsedal';
        } else if (path.includes('/salen')) {
            pageName = 'salen';
        } else if (path.includes('/kolmarden')) {
            pageName = 'kolmarden';
        } else if (path.includes('/historien-om-aim')) {
            pageName = 'historien-om-aim';
        } else if (path.includes('/faq')) {
            pageName = 'faq';
        } else if (path.includes('/results')) {
            pageName = 'results';
        }

        // Update title
        const titleKey = `meta-title-${pageName}`;
        if (textContent[titleKey]) {
            document.title = textContent[titleKey];
        } else if (pageName !== 'home') {
            // Fallback title if not found in textContent
            document.title = `${pageName.charAt(0).toUpperCase() + pageName.slice(1).replace(/-/g, ' ')} - Aim Challenge`;
        } else {
            document.title = 'Aim Challenge';
        }

        // Update description meta tag
        const descriptionKey = `meta-description-${pageName}`;
        let metaDescription = document.querySelector('meta[name="description"]');
        
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.name = 'description';
            document.head.appendChild(metaDescription);
        }
        
        if (textContent[descriptionKey]) {
            metaDescription.content = textContent[descriptionKey];
        } else {
            metaDescription.content = 'Aim Challenge - A premier archery competition series';
        }

        // Update keywords meta tag
        const keywordsKey = `meta-keywords-${pageName}`;
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = 'keywords';
            document.head.appendChild(metaKeywords);
        }
        
        if (textContent[keywordsKey]) {
            metaKeywords.content = textContent[keywordsKey];
        } else {
            metaKeywords.content = 'archery, competition, aim challenge, bow, arrow';
        }

        // Update Open Graph meta tags for social sharing
        const ogImageKey = `og-image-${pageName}`;
        
        // OG Title
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (!ogTitle) {
            ogTitle = document.createElement('meta');
            ogTitle.setAttribute('property', 'og:title');
            document.head.appendChild(ogTitle);
        }
        ogTitle.content = document.title;
        
        // OG Description
        let ogDescription = document.querySelector('meta[property="og:description"]');
        if (!ogDescription) {
            ogDescription = document.createElement('meta');
            ogDescription.setAttribute('property', 'og:description');
            document.head.appendChild(ogDescription);
        }
        ogDescription.content = metaDescription.content;
        
        // OG URL
        let ogUrl = document.querySelector('meta[property="og:url"]');
        if (!ogUrl) {
            ogUrl = document.createElement('meta');
            ogUrl.setAttribute('property', 'og:url');
            document.head.appendChild(ogUrl);
        }
        ogUrl.content = window.location.href;
        
        // OG Type
        let ogType = document.querySelector('meta[property="og:type"]');
        if (!ogType) {
            ogType = document.createElement('meta');
            ogType.setAttribute('property', 'og:type');
            document.head.appendChild(ogType);
        }
        ogType.content = 'website';
        
        // OG Image
        let ogImage = document.querySelector('meta[property="og:image"]');
        if (!ogImage) {
            ogImage = document.createElement('meta');
            ogImage.setAttribute('property', 'og:image');
            document.head.appendChild(ogImage);
        }
        
        if (textContent[ogImageKey]) {
            // Make sure we have an absolute URL for the OG image
            if (textContent[ogImageKey].startsWith('/')) {
                ogImage.content = `${window.location.origin}${textContent[ogImageKey]}`;
            } else {
                ogImage.content = textContent[ogImageKey];
            }
        } else {
            // Default image
            ogImage.content = `${window.location.origin}/images/logos/Aim_Challenge_logo_white.svg`;
        }
        
        // Twitter Card meta tags
        let twitterCard = document.querySelector('meta[name="twitter:card"]');
        if (!twitterCard) {
            twitterCard = document.createElement('meta');
            twitterCard.name = 'twitter:card';
            document.head.appendChild(twitterCard);
        }
        twitterCard.content = 'summary_large_image';
        
        let twitterTitle = document.querySelector('meta[name="twitter:title"]');
        if (!twitterTitle) {
            twitterTitle = document.createElement('meta');
            twitterTitle.name = 'twitter:title';
            document.head.appendChild(twitterTitle);
        }
        twitterTitle.content = document.title;
        
        let twitterDescription = document.querySelector('meta[name="twitter:description"]');
        if (!twitterDescription) {
            twitterDescription = document.createElement('meta');
            twitterDescription.name = 'twitter:description';
            document.head.appendChild(twitterDescription);
        }
        twitterDescription.content = metaDescription.content;
        
        let twitterImage = document.querySelector('meta[name="twitter:image"]');
        if (!twitterImage) {
            twitterImage = document.createElement('meta');
            twitterImage.name = 'twitter:image';
            document.head.appendChild(twitterImage);
        }
        twitterImage.content = ogImage.content;
        
    }, [path, textContent]);

    // This component doesn't render anything
    return null;
};

export default MetaUpdater;
