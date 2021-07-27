import classes from './Skills.module.css';
import { Github, Reactjs, Html, Js, Npm, Vscode, Css } from '../../Components';
import React from 'react';
const Skills = (props) => {
  const svgListItems = (svgs) => {
    return svgs.map((Svg, idx) => {
      return (
        <li key={idx}>
          <Svg />
        </li>
      );
    });
  };
  const techSvgs = [Js, Css, Reactjs, Html];
  const toolsSvgs = [Npm, Github, Vscode];
  const techList = svgListItems(techSvgs);
  const toolsList = svgListItems(toolsSvgs);
  return (
    <div data-aos="zoom-in" className={`${props.className} ${classes.skills}`}>
      <h2> here is what i do.. </h2>

      <p>
        Good understanding of all front end layers: javascript, html and css,
        with working experience on React.js as a framework. <br />
        <br />
      </p>
      <h3>front end technologies i practice</h3>
      <ul>{techList}</ul>
      <h3>some tools i use</h3>
      <ul>{toolsList}</ul>
    </div>
  );
};

export default Skills;
