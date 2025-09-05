import { useAuth } from "../context/AuthContext";
import HomeDefault from "./Home";
import HomeLoggedIn from "./Homel";

export default function Home() {
  const { user } = useAuth();

  if (user) {
    return <HomeLoggedIn user={user} />; // versi sudah login
  }
  return <HomeDefault />; // versi default
}
