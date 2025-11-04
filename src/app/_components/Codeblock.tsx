// components/CodeBlock.js
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Or any other style

const CodeBlock = ({ code, language }) => {
  return (
    <SyntaxHighlighter language={language} >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;