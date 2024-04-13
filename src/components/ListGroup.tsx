import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

// items = [];

// const getMessage = () => {
//   return items.length === 0 ? <p>No items found</p> : null;
// };

function ListGroup({ items, heading, onSelectItem }: Props) {
  //   var items = ["NYC", "London", "Delhi", "Tokyo", "San Fran", "Mumbai"];
  // let selectedIndex = -1;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
