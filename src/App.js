import "./App.scss";
import Login from "./layout/LoginView";
import ChatView from "./layout/ChatView";

function App() {
  return <div className="app">{0 ? <ChatView /> : <Login />}</div>;
}

export default App;
