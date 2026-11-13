import Image from "next/image";
import Counter from "@/components/counter";

import type { Metadata } from 'next';
import Card from "@/components/Card";
import CardTailwind from "@/components/CardTailwind";
export const metadata: Metadata = {
    title: "Home",
    description: "Learn more about our team and mission"
}

export default function Home() {

  console.log("I am a main component");
  return (
    <div>
      <Counter />
      <Card />
      <CardTailwind />
    </div>
  );
}
