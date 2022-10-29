import { useContext } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { FirebaseContext } from "../../context/FirebaseContext";
import FriendInbox from "./FriendInbox";

const FriendList = () => {
  const { userCollection } = useContext(FirebaseContext);
  const { userData } = useContext(CurrentUserContext);
  const [users] = useCollectionData(userCollection);
  return (
    <div className="conversation-area">
      {users
        ?.filter((data) => data.uid !== userData.uid)
        .map((user) => (
          <FriendInbox user={user} key={user.uid} />
        ))}
    </div>
  );
};

export default FriendList;
