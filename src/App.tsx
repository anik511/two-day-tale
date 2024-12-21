import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Form from "./components/Form";


function App() {
  const [items, setItems] = useState<string[]>(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div className="p-3">
      {alertVisible &&<Alert onDismiss={() => {setAlertVisibility(false)}}>
        <strong>Anik!</strong>
      </Alert>
      }
      <Button color="success"
        onclick={() => {setAlertVisibility(true)}}>
        Click Me
      </Button>
      <ListGroup items={items} heading="List" onSelectItem={handleSelectItem} />
      <Button color="success"
        onclick={() => {setItems(i=>[...i, `Item ${i.length + 1}`])}}>
        Add Item
      </Button>
      <Form />
    </div>
  );
  
}

export default App;