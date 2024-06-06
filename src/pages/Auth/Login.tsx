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

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-[100dvh] bg-gray-100 dark:bg-gray-950 px-4">
      <Card className="w-full max-w-md">
        <div className="my-3">
          <img className="w-40 mx-auto" src="/src/assets/Logo.png" alt="Logo" />
        </div>
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold">Sign in</CardTitle>
          <CardDescription>Enter your Account.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="Username">Username</Label>
            <Input id="username" type="" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
