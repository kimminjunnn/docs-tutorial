import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div>
      <p className="flex min-h-screen items-center justify-center">
        <Button variant="default">default</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="outline">outline</Button>
        <Button variant="ghost">ghost</Button>
        <Button variant="destructive">ghost</Button>
      </p>
    </div>
  );
};

export default Home;
