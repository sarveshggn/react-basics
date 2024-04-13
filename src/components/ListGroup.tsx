import { MouseEvent } from "react";

var items = ["NYC", "London", "Delhi", "Tokyo", "San Fran", "Mumbai"];
// items = [];

// const getMessage = () => {
//   return items.length === 0 ? <p>No items found</p> : null;
// };

const handleClick = (event: MouseEvent) => console.log(event);

function ListGroup() {
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
