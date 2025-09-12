import React, { useRef, useEffect } from 'react';
import '../styles/_simple-rich-editor.scss';

const SimpleRichEditor = ({ value, onChange, placeholder }) => {
  const editorRef = useRef(null);

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

  // Handle keyboard shortcuts
  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      document.execCommand('insertHTML', false, '&nbsp;&nbsp;&nbsp;&nbsp;');
    }
  };

  return (
    <div className="aim_rich_editor_container">
      <div className="aim_rich_editor_toolbar">
        <div role="button" tabIndex="0" onClick={() => formatText('bold')} className="aim_format_control" title="Bold"><strong>B</strong></div>
        <div role="button" tabIndex="0" onClick={() => formatText('italic')} className="aim_format_control" title="Italic"><em>I</em></div>
        <div role="button" tabIndex="0" onClick={() => formatText('underline')} className="aim_format_control" title="Underline"><u>U</u></div>
        <span className="aim_format_divider"></span>
        <div role="button" tabIndex="0" onClick={() => formatText('formatBlock', '<h1>')} className="aim_format_control" title="Heading 1">H1</div>
        <div role="button" tabIndex="0" onClick={() => formatText('formatBlock', '<h2>')} className="aim_format_control" title="Heading 2">H2</div>
        <div role="button" tabIndex="0" onClick={() => formatText('formatBlock', '<h3>')} className="aim_format_control" title="Heading 3">H3</div>
        <div role="button" tabIndex="0" onClick={() => formatText('formatBlock', '<p>')} className="aim_format_control" title="Paragraph">P</div>
        <span className="aim_format_divider"></span>
        <div role="button" tabIndex="0" onClick={() => formatText('insertUnorderedList')} className="aim_format_control" title="Bullet List">•</div>
        <div role="button" tabIndex="0" onClick={() => formatText('insertOrderedList')} className="aim_format_control" title="Numbered List">1.</div>
        <span className="aim_format_divider"></span>
        <div role="button" tabIndex="0" onClick={() => formatText('justifyLeft')} className="aim_format_control" title="Align Left">←</div>
        <div role="button" tabIndex="0" onClick={() => formatText('justifyCenter')} className="aim_format_control" title="Align Center">↔</div>
        <div role="button" tabIndex="0" onClick={() => formatText('justifyRight')} className="aim_format_control" title="Align Right">→</div>
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
    </div>
  );
};

export default SimpleRichEditor;
