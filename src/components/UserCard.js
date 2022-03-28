import { Link } from "react-router-dom";

export default function UserCard({ username, url }) {
  return (
    <Link to={`/${username}`}>
      <div className="card">
        <div className="info">
          <div className="img-box">
            <img src={url} alt={username} />
          </div>
          <div>{username}</div>
        </div>
        <div className="text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate,
          adipisci.
        </div>
      </div>
    </Link>
  );
}
