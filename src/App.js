import './App.css';
import ListItem from "./ListElements"; // named export
import { Message } from './Message';
function App()
{
  // inside div tag we can give multiple components but in only one components is supported inside return.
  return (
    <div>
      <Message></Message> //Components.
      <ListItem></ListItem> //Components.
    </div>
  );
}

export default App; // default export
