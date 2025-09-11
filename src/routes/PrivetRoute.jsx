import { Navigate, Outlet } from "react-router-dom";
import Header from "../component/common/Header";
import { useAuth } from "../hooks/useAuh";
export default function PrivetRoute() {
  const { auth } = useAuth();
  return (
    <>
      {auth?.user ? (
        <>
          <Header />
          <main className="mx-auto max-w-[1020px] py-8">
            <div className="container">
              <Outlet />
            </div>
          </main>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
