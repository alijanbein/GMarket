import "./animated-button.css";
const AnimatedButton = (props) => {
    
  return <button onClick={props.onClick} id="btn" className={props.className}>
    <span />
    <span />
    <span />
  </button>;
};

export default AnimatedButton;
