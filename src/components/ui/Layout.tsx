import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-background font-medium text-white">
      <div className="mx-auto min-h-screen max-w-screen-sm px-4 py-14">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
