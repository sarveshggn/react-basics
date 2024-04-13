import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  var items = ["NYC", "London", "Delhi", "Tokyo", "San Fran", "Mumbai"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
