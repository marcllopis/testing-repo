import React, { useState } from "react";
import Dog from "./components/Dog";
import Text from "./components/Text";
import "./App.css";

//container of all the texts you will show
let allTexts = [
  "Welcome to crazy dog, click on him to start!",
  "Amazing! This crazy dog will help you do stuff, click on him again",
  "He likes the clicks! Do it again to change location!",
  "Wow! He travels so fast! click more!",
  "That's it, he is tired, go to sleep",
];

function App() {
  //store in state the counter that I'll use to control the index of the array of texts, when this value changes, it will cause an update on the UI
  let [indexCounter, setIndexCounter] = useState(0);

  // method to handle what happens when the dog is clicked. It will increment the index by 1
  const handleDogClick = () => {
    setIndexCounter(indexCounter + 1);
  };

  return (
    // I use a ternary on the class, by default it shows the standard App class from react but if the index is bigger than 3, it will show smth else
    <div className={indexCounter < 3 ? "App" : "beach"}>
      {/* Component that will render all the texts, I pass them as prop and also pass down the index property to control which one is rendered */}
      <Text sentences={allTexts} currentIndex={indexCounter} />
      {/* Component that will render the dog image, it receives as props the function that handles the click */}
      <Dog action={handleDogClick} />
    </div>
  );
}

export default App;
