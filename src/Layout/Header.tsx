import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, LogOut } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white py-4 shadow-md">
      <div className="w-full px-4 flex flex-row justify-between items-center">
        {/* <h1 className="text-primary text-2xl font-bold">/*My Header</h1> */}
        <h1 className="text-primary text-2xl font-bold"></h1>
        <div className="flex flex-row items-center">
          <p className="text-gray-600">Hello, Dat</p>
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
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem onClick={() => console.log("Logout")}>
                <div className="flex flex-row items-center text-destructive">
                  <span>Logout</span>
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
