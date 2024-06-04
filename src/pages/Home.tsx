import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const Home = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { toast } = useToast();
  return (
    <>
      <Button
        variant="default"
        size={"default"}
        border={"circle"}
        className="mx-5 my-5"
        onClick={() => {
          toast({
            title: "Hello",
            description: "This is a toast",
            variant: "default",
          });
        }}
      >
        Click me
      </Button>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </>
  );
};

export default Home;
