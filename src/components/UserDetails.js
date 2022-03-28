import { useParams } from "react-router-dom";

export default function UserDetails() {
  const { name } = useParams();

  return <div>{name}</div>;
}
