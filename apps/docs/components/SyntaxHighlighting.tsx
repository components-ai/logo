// https://components.ai/syntax-theme/5Q0528PTUKaEcN3BPkjX?tab=export

export const SyntaxHighlighting = () => {
  return (
    <style>
      {`code[class*="language-"],
pre[class*="language-"] {
  color: #feacbc;
  background: #000000;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: 1em;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  
  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #c7e2ff;
}

.token.punctuation {
  color: #c7c4ff;
}

.token.tag,
.token.attr-name,
.token.namespace,
.token.deleted {
  color: #ffced8;
}

.token.function-name {
  color: #eda500;
}

.token.boolean,
.token.constant {
  color: #ebebeb;
}

.token.class-name,
.token.symbol,
.token.function,
.token.property {
  color: #a2cdff;
}

.token.selector,
.token.atrule,
.token.keyword,
.token.builtin {
  color: #878697;
}

.token.string,
.token.char,
.token.attr-value,
.token.regex,
.token.variable {
  color: #feefff;
}

.token.operator,
.token.entity,
.token.url {
  color: #6feff4;
}

.token.important {
  font-weight: bold;
  color: #eef7ef;
}

.token.bold {
  font-weight: bold;
}

.token.italic {
  font-style: italic;
}

.token.inserted {
  color: #b9f8d7;
}

.token.number {
  color: #fe89a1;
}`}
    </style>
  )
}
