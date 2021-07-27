import classes from './Contact.module.css';

const Contact = (props) => {
  return (
    <div data-aos="zoom-in" className={`${props.className} ${classes.contact}`}>
      <h2> welcome</h2>
      <p>
        If you’re interested in playing around with React, you can use an online
        code playground. Try a Hello World template on CodePen, CodeSandbox, or
        Stackblitz. If you prefer to use your own text editor, you can also
        download this HTML file, edit it, and open it from the local filesystem
        in your browser. It does a slow runtime code transformation, so we’d
        only recommend using this for simple demos.
      </p>
    </div>
  );
};

export default Contact;
