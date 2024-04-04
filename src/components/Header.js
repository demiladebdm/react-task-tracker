import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      {/* Inline Styling */}
      {/* <h1 style={{ color: "red", backgroundColor: "black" }}>{title}</h1> */}

      <h1>{title}</h1>
      <Button color={showAdd ?  "red" : "green"} text={showAdd ? "Close" : "Add"} onClick={onAdd} />
    </header>
  );
  //This is if nothing is passed on the App.js props, but note that the props passed frm the app would always override the default prop
  // Header.defaultProps = {
  //   title: "Task Tracker",
  // };
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//CSS in JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
