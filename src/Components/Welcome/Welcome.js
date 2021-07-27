import classes from './Welcome.module.css';
import WelcomeSVG from '../Svg/WelcomeSVG';
const Welcome = (props) => {
  return (
    <div className={classes.welcome}>
      <h1 data-aos="zoom-in"> Hello World</h1>
      <p data-aos="zoom-in">
        My name is omer zabtani 👋 <br />
        and i am looking for a front end developer job.
      </p>

      <WelcomeSVG />
    </div>
  );
};

export default Welcome;
