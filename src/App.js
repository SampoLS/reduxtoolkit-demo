import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./components/UserCard";
import {
  clearExistingUsers,
  fetchUsers,
  getUsers,
} from "./features/usersSlice";

export default function App() {
  const users = useSelector(getUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());

    return () => {
      dispatch(clearExistingUsers());
    };
  }, [dispatch]);

  const renderedUsers =
    users.length === 0 ? (
      <div className="loading">...Loading</div>
    ) : (
      users.map((user, index) => {
        return (
          <UserCard key={index} username={user.login} url={user.avatar_url} />
        );
      })
    );

  return <div className="App">{renderedUsers}</div>;
}
