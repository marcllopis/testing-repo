// Simple component that renders a text based on which index he receives
const Text = (props) => <h1>{props.sentences[props.currentIndex]}</h1>;

export default Text;
