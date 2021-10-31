import {useState} from 'react'
import Preview from './Preview'


const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here is some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

- And of course, there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That looks like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![minipic](https://vectorlogoseek.com/wp-content/uploads/2019/04/freecodecamp-vector-logo.png)
`;

export default function App() {
  const [text, setText] = useState(placeholder);
  return (
    <div className="text-center px-4">
      <h1 className="p-4">Markdown Editor</h1>
      <textarea
        id="editor"
        name="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="textarea"
        rows="7"
      ></textarea>
      <h2 className="mt-3 p-4">Markdown Output</h2>
      <Preview markdown={text} />
    </div>
  );
}





