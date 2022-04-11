import dog from "../images/dog.png";

const Dog = (props) => (
  // wrap it in a div so I can add the onClick attribute
  <div onClick={props.action}>
    <img src={dog} alt="crazy dog" className="App-logo" />
  </div>
);

export default Dog;
