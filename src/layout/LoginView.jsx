import { useContext } from "react";
import { FirebaseContext } from "../context/FirebaseContext";

const Login = () => {
  const { auth, firebase } = useContext(FirebaseContext);
  const handleLoginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).catch((err) => err);
  };

  return (
    <div className="LoginView">
      <h3 className="LoginView-title">Enter your credentials</h3>
      <button className="LoginView-button" onClick={handleLoginWithGoogle}>
        Login With Google
      </button>
    </div>
  );
};

export default Login;
