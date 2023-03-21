import { getSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const data = async () => {
      const session = await getSession();

      if (!session) {
        router.push("/");
      }
    };
    data();
  }, []);

  return (
    <>
      <h1>Hello!</h1>
      <button onClick={() => signOut({ callbackUrl: "/" })}>Sair</button>
    </>
  );
};

export default Home;
