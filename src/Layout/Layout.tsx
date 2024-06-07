import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { GoPackage } from "react-icons/go";
import { MdSpaceDashboard } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const activeTab = location.pathname.split("/")[1];

  return (
    <>
      <ResizablePanelGroup direction="horizontal" className="w-screen">
        <ResizablePanel
          defaultSize={15}
          minSize={10}
          className="flex flex-col justify-start bg-slate-50 py-3 select-none"
        >
          <NavLink
            to="/dashboard"
            className={`text-black font-semibold w-full px-4 py-2 text-center text-xs mt-3 hover:bg-secondary  flex flex-row justify-start items-center ${activeTab === "dashboard" ? "bg-secondary" : ""
              }`}
          >
            <MdSpaceDashboard size={25} />
            <p className="text-sm p-2 ">Bảng điều khiển</p>
          </NavLink>
          <NavLink
            to="/package"
            className={`text-black font-semibold w-full px-4 py-2 text-center text-xs mt-3 hover:bg-secondary  flex flex-row justify-start items-center ${activeTab === "package" ? "bg-secondary" : ""
              }`}
          >
            <GoPackage size={25} />
            <p className="text-sm p-2 ">Gói</p>
          </NavLink>
        </ResizablePanel>
        <ResizableHandle withHandle className="h-screen" />
        <ResizablePanel defaultSize={85} minSize={50}>
          <Header />
          <div className="p-3 h-screen bg-gray-100">{children}</div>
        </ResizablePanel>
      </ResizablePanelGroup>
      <Footer />
    </>
  );
};

export default Layout;
