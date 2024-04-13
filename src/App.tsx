import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import "./App.css";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  var items = ["NYC", "London", "Delhi", "Tokyo", "San Fran", "Mumbai"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const handleClick = () => {
    () => console.log("Clicked");
  };

  const [AlertVisible, setAlertVisibility] = useState(false);

  return (
    // <div>
    //   <ListGroup
    //     items={items}
    //     heading="Cities"
    //     onSelectItem={handleSelectItem}
    //   />
    // </div>
    <div>
      {AlertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hello
          <span>
            <em>World</em>
          </span>
        </Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        Click kar
      </Button>
    </div>
  );
}

export default App;
