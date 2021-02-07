import React from "react"
import CodeSample from "./CodeSample"

const codeSample = `onSubmit(e) {
    e.preventDefault();
    const job = {
      title: 'Developer',
      company: 'Facebook' 
    };
  }
  
  const Add = (a: number, b: number): number => {
    return a + b * 2;
  }`;

const csscodeSample = `.selector {
  width: 100rem;
}`
const blogPost = () => {
  return (
<div className="blog-main-container col">

<h3>TITLE</h3>

<div className="row">

  <div>EXAMPLE</div>

  <CodeSample language={"javascript"} codeSample={codeSample} />
  <CodeSample language={"css"} codeSample={csscodeSample} />

</div>


</div>
  )
}

export default function Showroom(props) {
  document.title = `Pierre Portal | Showroom`;

    return <div className="home-container">

      {blogPost()}
      {blogPost()}
      {blogPost()}
      {blogPost()}




    </div>
}