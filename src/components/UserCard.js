import { Link } from "react-router-dom";

export default function UserCard({ username, url, quote }) {
  if (!quote) {
    return null;
  }

  return (
    <Link to={`/${username}`}>
      <div className="card">
        <div className="info">
          <div className="img-box">
            <img src={url} alt={username} />
          </div>
          <div>{username}</div>
        </div>
        <div className="text">{quote.content}</div>
      </div>
    </Link>
  );
}
