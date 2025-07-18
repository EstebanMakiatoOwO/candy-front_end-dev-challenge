import { Outlet } from 'react-router-dom';


export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white text-black">
      <div className="flex flex-1 w-full">
        <main className="flex-1 p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
