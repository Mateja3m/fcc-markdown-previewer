import React from 'react'
import marked from 'marked';

marked.setOptions({
    breaks: true
  });
  
  
const renderer = new marked.Renderer();
const Preview = ({ markdown}) => {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: marked(markdown, { renderer: renderer })
        }}
        id="preview"
      ></div>
    );
  };

export default Preview
