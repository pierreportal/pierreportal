import React, {useEffect} from "react";
import Prism from "prismjs";
import "../styles/prism.css"

export default function CodeSample(props) {
  const { language, codeSample } = props;

  useEffect(() => Prism.highlightAll(), [])

  


  return (
    <div className="code-sample-container">

      <pre>
  <div className="language-tag">{language}</div>
  <code className={`language-${language}`}>

{codeSample}


  </code>
</pre>
    </div>
  );
}
