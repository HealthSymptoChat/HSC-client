import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { MdSpaceDashboard } from "react-icons/md";
import { GoPackage } from "react-icons/go";
import { NavLink, useLocation } from "react-router-dom";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const activeTab = location.pathname.split("/")[1];

  return (
    <ResizablePanelGroup direction="horizontal" className="h-screen w-screen">
      <ResizablePanel
        defaultSize={15}
        minSize={10}
        className="flex flex-col justify-start bg-slate-700 py-3 select-none"
      >
        <NavLink
          to="/dashboard"
          className={`text-white w-full px-4 text-center my-1 text-xs mt-3 hover:bg-slate-500  flex flex-row justify-start items-center ${
            activeTab === "dashboard" ? "bg-slate-500" : ""
          }`}
        >
          <MdSpaceDashboard size={25} />
          <p className="text-sm p-2 ">Bảng điều khiển</p>
        </NavLink>
        <NavLink
          to="/package"
          className={`text-white w-full px-4 text-center my-1 text-xs mt-3 hover:bg-slate-500  flex flex-row justify-start items-center ${
            activeTab === "package" ? "bg-slate-500" : ""
          }`}
        >
          <GoPackage size={25} />
          <p className="text-sm p-2 ">Gói</p>
        </NavLink>
      </ResizablePanel>
      <ResizableHandle withHandle className="h-screen" />
      <ResizablePanel defaultSize={85} minSize={50} className="p-3">
        {children}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Layout;
