// components/CodeBlock.js
import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const CodeBlock = ({ code, language }) => {
  return (
    <SyntaxHighlighter language={language} style={nightOwl} wrapLongLines={true} >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;