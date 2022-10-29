import { createContext, useContext, useEffect } from "react";
import { FirebaseContext } from "./FirebaseContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
export const CurrentUserContext = createContext();

const CurrentUserProvider = ({ children }) => {
  const { auth, userCollection } = useContext(FirebaseContext);
  const [userData] = useAuthState(auth);
  const query =
    userData?.uid && userCollection.where("uid", "==", userData.uid);
  const [currentUser] = useCollectionData(query);
  useEffect(() => {
    if (currentUser?.length === 0) {
      userCollection.add({
        displayName: userData.displayName,
        photoUrl: userData.photoURL,
        uid: userData.uid,
      });
    }
  }, [currentUser]);
  return (
    <CurrentUserContext.Provider value={{ userData }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
