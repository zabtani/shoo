import Navbar from './Navbar/Navbar';
const Header = (props) => {
  return (
    <header>
      <Navbar show={props.show} sections={props.sections} />
    </header>
  );
};

export default Header;
