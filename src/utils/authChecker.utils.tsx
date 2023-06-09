import { useEffect, FunctionComponent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthChecker: FunctionComponent = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const session = JSON.parse(sessionStorage.getItem("session") as string);

  useEffect(() => {
    const session = JSON.parse(sessionStorage.getItem("session") as string);
    // console.log(session);

    if (!session && pathname !== "/" && pathname !== "/auth") {
      navigate(`/auth?redirect=${pathname}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, session]);

  return null;
};

export default AuthChecker;
