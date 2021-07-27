import classes from './Projects.module.css';
import noterJPG from './noter.JPG';
import shopJPG from './shop.JPG';
const Projects = (props) => {
  return (
    <div
      data-aos="zoom-in"
      className={`${props.className} ${classes.projects}`}
    >
      <h2> Projects</h2>
      <p>
        {' '}
        online code playground. Try a Hello World template on CodePen,
        CodeSandbox, or Stackblitz. If you prefer to use your own text editor,
        you can also download this HTML file, edit it, and open it from the
      </p>
      <div className={classes.projectsContainer}>
        <div className={classes.project}>
          <h3>Noter App</h3>

          <img src={noterJPG} />
          <div className={classes.demoLink}>
            <a href="https://zabtani.github.io/Noter/">watch live demo</a>
          </div>
          <p>
            If you’re interested in playing around with React, you can use an
            online code playground. Try a Hello World template on CodePen,
            CodeSandbox, or Stackblitz. If you prefer to use your own text
            editor, you can also download this HTML file, edit it, and open it
            from the local filesystem in your browser. It does a slow runtime
            code transformation, so we’d only recommend using this for simple
            demos.
          </p>
        </div>
        <div className={classes.project}>
          <h3>Shop App</h3>

          <img src={shopJPG} />
          <div className={classes.demoLink}>
            <a href="https://zabtani.github.io/shop/">watch live demo</a>
          </div>
          <p>
            If you’re interested in playing around with React, you can use an
            online code playground. Try a Hello World template on CodePen,
            CodeSandbox, or Stackblitz. If you prefer to use your own text
            editor, you can also download this HTML file, edit it, and open it
            from the local filesystem in your browser. It does a slow runtime
            code transformation, so we’d only recommend using this for simple
            demos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
