import { Button } from "@nextui-org/react";
import { SiMaas } from "react-icons/si";


export default function Home() {
  return (
      <div className="text-3xl">
        hello
          <Button startContent={<SiMaas />} color="danger" variant="bordered">on click</Button>
      </div>
  );
}
