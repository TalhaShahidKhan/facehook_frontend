import { useAuth } from "../hooks/useAuh";

export default function HomePage() {
  const { auth } = useAuth();
  console.log(auth);
  return <div>HomePage</div>;
}
