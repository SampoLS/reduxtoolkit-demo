import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "./components/Spinner";
import TodosList from "./components/TodosList";

import UserCard from "./components/UserCard";
import { fetchQuotes, getQuotes } from "./features/quotesSlice";
import { fetchUsers, getUsers } from "./features/usersSlice";

export default function App() {
  const dispatch = useDispatch();

  const users = useSelector(getUsers);
  const [quote] = useSelector(getQuotes);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchQuotes());
  }, [dispatch]);

  const renderedUsers = quote ? (
    users.map((user, index) => {
      return (
        <UserCard
          key={index}
          username={user.login}
          url={user.avatar_url}
          quote={quote}
        />
      );
    })
  ) : (
    <Spinner />
  );

  return (
    <div className="App">
      <TodosList />
      {renderedUsers}
    </div>
  );
}
