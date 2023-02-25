import React from "react";
import Card from "./Card";

export default function Services() {
  return (
    <>
      <div
        style={{
          marginTop: "100px",
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "auto",
        }}
      >
        <h1 style={{ color: "#d5c455" }}>Services I provide are below</h1>
        <div
          style={{
            display: "grid",
            gridTemplateRows: "repeat(auto-fit, minmax(200px, 1fr)",
            marginTop: "50px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              skill="SIG"
              bio="I have an excellent knowledge of GIS (ArcGis, GlobalMapper, Qgis and ENVI ), backed by extensive experience and expertise in the field. I possess a deep understanding. My ability to apply this knowledge to real-world scenarios has allowed me to manage a sensitive project. I am highly passionate about this field and am always looking to expand my knowledge and stay up-to-date with the latest developments."
            />
            <Card
              skill="Foxta"
              bio="I possess a strong understanding and extensive experience working with FOXTA, a powerful geotechnical calculation software. My expertise with FOXTA includes a deep knowledge of its features and capabilities, as well as the ability to utilize its tools to analyze and interpret data related to various geotechnical engineering projects."
            />
            <Card
              skill="Adobe Illustrator"
              bio="I possess a basic understanding and experience working with Adobe Illustrator, a popular vector graphics editor. My knowledge of Illustrator includes the ability to create basic shapes, lines, and text, as well as the ability to apply basic color, texture, and gradient effects. I am also familiar with the general workflow and user interface of the software. While my knowledge of Illustrator is not advanced, I am eager to learn and improve my skills in this area."
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              skill="HTML"
              bio="I am currently in the process of learning HTML, the standard markup language used to create web pages. While my knowledge of HTML is basic, I am actively studying and improving my skills in this area. I am familiar with the basic syntax, elements, and attributes used in HTML, and am able to create basic web pages with HTML. I am excited about the potential of HTML to create dynamic and interactive web content, and am committed to continuing to learn and grow in this area."
            />
            <Card
              skill="CSS"
              bio="I am currently in the process of learning CSS, the styling language used to add visual design and layout to web pages. While my knowledge of CSS is basic, I am actively studying and improving my skills in this area. I am familiar with the basic syntax, selectors, and properties used in CSS, and am able to apply basic styling to HTML elements. I am also working on improving my understanding of web design principles, such as typography, color theory, and responsive design, to create web pages that are visually appealing and user-friendly."
            />
            <Card
              skill="React"
              bio="I am currently in the process of learning React, a powerful JavaScript library for building dynamic user interfaces. While my knowledge of React is basic, I am actively studying and improving my skills in this area. I am familiar with the basic concepts of React, such as components, props, and state, and have built simple applications using React. I am also working on improving my understanding of other important concepts, such as React Router, React Hooks, and Redux, to create more complex and scalable applications."
            />
          </div>
        </div>
      </div>
    </>
  );
}
