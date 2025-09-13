import React, { useRef, useEffect, useState } from 'react';
import '../styles/_simple-rich-editor.scss';

const SimpleRichEditor = ({ value, onChange, placeholder }) => {
  const editorRef = useRef(null);
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [linkText, setLinkText] = useState('');
  const [selectionRange, setSelectionRange] = useState(null);

  // Initialize editor with content when value changes externally
  useEffect(() => {
    if (editorRef.current && value !== editorRef.current.innerHTML) {
      editorRef.current.innerHTML = value;
    }
  }, [value]);

  // Handle content changes
  const handleInput = () => {
    if (editorRef.current && onChange) {
      onChange(editorRef.current.innerHTML);
    }
  };

  // Format text with execCommand
  const formatText = (command, value = null) => {
    document.execCommand(command, false, value);
    editorRef.current.focus();
    handleInput();
    
    // Force update for certain commands
    if (command === 'formatBlock') {
      // Add a small delay to ensure the formatting is applied
      setTimeout(() => {
        handleInput();
      }, 10);
    }
  };

  // Handle opening the link modal
  const handleLinkButtonClick = () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      setSelectionRange(range);
      setLinkText(range.toString());
      setShowLinkModal(true);
    } else {
      setShowLinkModal(true);
    }
  };

  // Insert link into the editor
  const insertLink = () => {
    if (linkUrl.trim() === '') {
      return;
    }

    // If there's no selection or text, create a link with the URL as text
    const textToUse = linkText.trim() === '' ? linkUrl : linkText;
    
    // Create the link HTML
    const linkHtml = `<a href="${linkUrl}" target="_blank" rel="noopener noreferrer">${textToUse}</a>`;
    
    if (selectionRange) {
      // Restore the selection
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(selectionRange);
      
      // Insert the link
      document.execCommand('insertHTML', false, linkHtml);
    } else {
      // If no selection, just append the link
      document.execCommand('insertHTML', false, linkHtml);
    }
    
    // Reset and close the modal
    setLinkUrl('');
    setLinkText('');
    setSelectionRange(null);
    setShowLinkModal(false);
    
    // Update the content
    handleInput();
    editorRef.current.focus();
  };

  // Handle keyboard shortcuts
  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      document.execCommand('insertHTML', false, '&nbsp;&nbsp;&nbsp;&nbsp;');
    }
  };

  // Define toolbar buttons
  const toolbarButtons = [
    { command: 'bold', title: 'Bold', content: <strong>B</strong> },
    { command: 'italic', title: 'Italic', content: <em>I</em> },
    { command: 'underline', title: 'Underline', content: <u>U</u> },
    { type: 'divider' },
    { command: 'formatBlock', value: '<h1>', title: 'Heading 1', content: 'H1' },
    { command: 'formatBlock', value: '<h2>', title: 'Heading 2', content: 'H2' },
    { command: 'formatBlock', value: '<h3>', title: 'Heading 3', content: 'H3' },
    { command: 'formatBlock', value: '<p>', title: 'Paragraph', content: 'P' },
    { type: 'divider' },
    { command: 'insertUnorderedList', title: 'Bullet List', content: '•' },
    { command: 'insertOrderedList', title: 'Numbered List', content: '1.' },
    { type: 'divider' },
    { command: 'justifyLeft', title: 'Align Left', content: '←' },
    { command: 'justifyCenter', title: 'Align Center', content: '↔' },
    { command: 'justifyRight', title: 'Align Right', content: '→' },
    { type: 'divider' },
    { command: 'link', title: 'Insert Link', content: 'Link', onClick: handleLinkButtonClick }
  ];

  return (
    <div className="aim_rich_editor_container">
      <div className="aim_rich_editor_toolbar">
        {toolbarButtons.map((button, index) => {
          if (button.type === 'divider') {
            return <span key={`divider-${index}`} className="aim_format_divider"></span>;
          }
          
          return (
            <div
              key={`${button.command}-${index}`}
              role="button"
              tabIndex="0"
              onClick={button.onClick || (() => formatText(button.command, button.value))}
              className="aim_format_control"
              title={button.title}
            >
              {button.content}
            </div>
          );
        })}
      </div>
      <div
        className="aim_rich_editor_content"
        ref={editorRef}
        contentEditable="true"
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        suppressContentEditableWarning={true}
      />
      
      {showLinkModal && (
        <div className="aim_link_modal">
          <div className="aim_link_modal_content">
            <h3>Insert Link</h3>
            <div className="aim_link_form">
              <div className="aim_form_group">
                <label htmlFor="linkText">Link Text</label>
                <input 
                  type="text" 
                  id="linkText" 
                  value={linkText} 
                  onChange={(e) => setLinkText(e.target.value)} 
                  placeholder="Text to display"
                />
              </div>
              <div className="aim_form_group">
                <label htmlFor="linkUrl">URL</label>
                <input 
                  type="text" 
                  id="linkUrl" 
                  value={linkUrl} 
                  onChange={(e) => setLinkUrl(e.target.value)} 
                  placeholder="https://example.com"
                />
              </div>
              <div className="aim_link_buttons">
                <button onClick={() => setShowLinkModal(false)} className="aim_cancel_button">Cancel</button>
                <button onClick={insertLink} className="aim_insert_button">Insert</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimpleRichEditor;
