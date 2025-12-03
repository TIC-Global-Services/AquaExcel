import ContainerLayout from "@/layouts/ContainerLayout";
import Image from "next/image";

export default function Home() {
  return (
  <ContainerLayout>
    <div>
      Use this in the component level, <span className=" font-hoves-pro font-bold">not in page level !</span> 
    </div>
  </ContainerLayout>
  );
}
