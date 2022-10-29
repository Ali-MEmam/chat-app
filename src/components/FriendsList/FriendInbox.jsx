import { useContext } from "react";
import { SecondUserContext } from "../../context/SecondUserContext";

const FriendInbox = ({ user }) => {
  const { secondUserData, setSecondUserData } = useContext(SecondUserContext);
  return (
    <div
      className={`msg ${user?.uid === secondUserData?.uid && "active"}`}
      onClick={() => setSecondUserData(user)}
    >
      <div className="msg-profile group">
        <img src={user?.photoUrl} alt={user?.displayName} />
      </div>
      <div className="msg-detail">
        <div className="msg-username">{user?.displayName}</div>
      </div>
    </div>
  );
};

export default FriendInbox;
