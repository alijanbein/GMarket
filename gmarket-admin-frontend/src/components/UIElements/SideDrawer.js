import ReactDom from "react-dom";
import { CSSTransition } from "react-transition-group";
const SideDrawer = (props) => {
  const content = (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
    >
      <aside className="side-drawer" onClick={props.onClick}>{props.children}</aside>
    </CSSTransition>
  );
  return ReactDom.createPortal(content,document.getElementById('side-drawer'));
};

export default SideDrawer;
