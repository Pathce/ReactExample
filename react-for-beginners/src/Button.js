import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text, clickFunc }) {
  return <button className={styles.btn} onClick={clickFunc}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickFunc: PropTypes.func,
}

export default Button;