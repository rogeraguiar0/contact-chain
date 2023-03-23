import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { setCookie, parseCookies } from "nookies";
import { useRouter } from "next/router";
import { api } from "../api/axios";
import { Client } from "@prisma/client";
import { iLogin } from "../types";

interface iAuthProvider {
  setToken: (value: string) => void;
  login: (clientData: iLogin) => void;
  token: string | undefined;
  client: string | null;
}

interface iAuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<iAuthProvider>({} as iAuthProvider);

export const AuthProvider = ({ children }: iAuthProviderProps) => {
  const router = useRouter();

  const [token, setToken] = useState<string>("");
  const [client, setClient] = useState<string>("");

  const login = (clientData: iLogin) => {
    api
      .post("/login", clientData)
      .then((res) => {
        setCookie(null, "contact-chain-token", res.data.token, {
          maxAge: 60 * 30,
          path: "/",
        });
        setCookie(null, "contact-chain-email", res.data.email, {
          maxAge: 60 * 30,
          path: "/",
        });
        setCookie(null, "contact-chain-name", res.data.name, {
          maxAge: 60 * 30,
          path: "/",
        });

        setToken(res.data.token);
        setClient(res.data.email);

        router.push("/home");
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    const cookies = parseCookies();

    const fetchData = async () => {
      await api
        .get("clients/retrieve", {
          headers: {
            Authorization: `Bearer ${cookies["contact-chain-token"]}`,
          },
        })
        .then((res) => {
          setToken(res.data.token);
          setClient(res.data.email);
          router.push("/home");
        })
        .catch((err) => console.error(err));
    };

    if (cookies["contact-chain-token"]) fetchData();
  }, []);

  return (
    <AuthContext.Provider value={{ login, token, client, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
