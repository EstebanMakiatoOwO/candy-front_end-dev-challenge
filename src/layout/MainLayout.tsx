import { HeaderNavbar } from "@/components/HeaderNavbar/HeaderNavbar";
import { LeftSideNavbar } from "@/components/LeftSideNavbar/LeftSideNavbar";
import { RightLine } from "@/components/RightLine";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white text-black">
      <HeaderNavbar />
      <div className="flex flex-1 w-full">
        <LeftSideNavbar />
        <main className="flex-1 p-4 overflow-auto">
          <Outlet />
        </main>
        <RightLine />
      </div>
    </div>
  );
};
