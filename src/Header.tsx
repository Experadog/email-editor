import useAuth from "./hooks/useAuth";

export function Header() {
  const { isLoggedIn } = useAuth();

  return <h1>{isLoggedIn ? "Hi! Vlad" : "Log in"}</h1>;
}
