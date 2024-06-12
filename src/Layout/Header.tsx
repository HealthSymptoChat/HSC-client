import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";
import { AuthContext } from "@/context/AuthContext";
import { authAxios } from "@/services/axios";
import { ChevronDown, LogOut } from "lucide-react";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const { setAuthenticated } = useContext(AuthContext);
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const activeTab = location.pathname.split("/")[1];

  const logout = async () => {
    try {
      const response = await authAxios.post("/auth/logout", {
        refreshToken: localStorage.getItem("refreshToken"),
      });
      if (response.data.message === "success") {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
        setAuthenticated(false);
        toast({
          title: "Đăng xuất thành công",
          variant: "success",
        });
        navigate("/auth/login");
      } else {
        toast({
          title: "Đăng xuất thất bại",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <header className="bg-white py-4 shadow-md">
      <div className="w-full px-4 flex flex-row justify-between items-center">
        <h1 className="text-primary text-2xl font-bold">
          {activeTab === "dashboard" ? "Bảng điều khiển" : "Gói"}
        </h1>
        <div className="flex flex-row items-center">
          <p className="text-gray-600">Chào, Admin</p>
          <Avatar className="mx-2">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <ChevronDown
              //   className="transition-transform duration-200 active:rotate-180"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Tài khoản</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {/* <DropdownMenuItem>Hồ sơ</DropdownMenuItem> */}
              <DropdownMenuItem onClick={() => logout()}>
                <div className="flex flex-row items-center text-destructive">
                  <span>Đăng xuất</span>
                  <LogOut size={20} className="ml-2" />
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
