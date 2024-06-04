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
import { Separator } from "@/components/ui/separator";

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="w-11/12 h-5/6">
        <div className="flex h-full justify-between items-center space-x-4">
          <CardContent className="w-1/3">
            <img
              src="https://via.placeholder.com/150"
              alt="logo"
              className="w-80 h-96 object-cover"
            />
          </CardContent>
          <Separator orientation="vertical" />
          <CardContent className="w-2/3">
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Enter your credentials</CardDescription>
            </CardHeader>
            <Input type="email" placeholder="Email" className="mb-5" />
            <Input type="password" placeholder="Password" className="mt-5" />
            <CardFooter>
              <Button variant="default" className="w-full mt-10">
                Login
              </Button>
            </CardFooter>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default Login;
