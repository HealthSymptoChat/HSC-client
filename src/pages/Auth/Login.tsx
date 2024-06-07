/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { publicAxios } from "@/services/axios";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

export default function Login() {
  const { toast } = useToast();
  const { setAuthenticated } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const login = async (data: any) => {
    try {
      const response = await publicAxios.post("/auth/login", data);
      if (response.data.message === "success") {
        localStorage.setItem(
          "accessToken",
          response.data.data.tokens.accessToken
        );
        localStorage.setItem(
          "refreshToken",
          response.data.data.tokens.refreshToken
        );
        localStorage.setItem("user", JSON.stringify(response.data.data.user));
        setAuthenticated(true);

        toast({
          title: "Đăng nhập thành công",
          // description: "Login successful",
          variant: "default",
        });
        navigate("/dashboard");
      } else {
        console.log(response.data);
        toast({
          title: "Đăng nhập thất bại",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-[100dvh] bg-gray-100 dark:bg-gray-950 px-4">
      <Card className="w-full max-w-md">
        <div className="my-5">
          <img className="w-40 mx-auto" src="/src/assets/Logo.png" alt="Logo" />
        </div>
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold">Đăng nhập</CardTitle>
          <CardDescription>
            Nhập thông tin tài khoản của bạn để đăng nhập
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(login)}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="Username">Tên người dùng</Label>
              <Input
                id="username"
                type="text"
                required
                {...register("username")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Mật khẩu</Label>
              <Input
                id="password"
                type="password"
                required
                {...register("password")}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit" className="w-full">
              Đăng nhập
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
