import "./App.css";
import Sidebar from "./Sidebar/Sidebar.js";
import Chat from "./Chat/Chat.js";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
