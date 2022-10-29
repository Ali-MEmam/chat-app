import "./App.scss";
import Login from "./layout/LoginView";
import ChatView from "./layout/ChatView";
import { useContext } from "react";
import { FirebaseContext } from "./context/FirebaseContext";
import { CurrentUserContext } from "./context/CurrentUserContext";

function App() {
  const { userData } = useContext(CurrentUserContext);
  return <div className="app">{userData ? <ChatView /> : <Login />}</div>;
}

export default App;
