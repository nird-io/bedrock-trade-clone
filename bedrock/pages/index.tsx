import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/global/Header";
import { Hero } from "@/components/Home/Hero";
import { Exchange } from "@/components/Home/Exchange";
import { ExchangeTable } from "@/components/Home/ExchangeTable";
import { Section_a } from "@/components/Home/Section_a";
import { Section_b } from "@/components/Home/Section_b";
import { Section_c } from "@/components/Home/Section_c";
import { Section_d } from "@/components/Home/Section_d";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex bg-slate-100 min-h-screen flex-col ${inter.className}`}
    >
      <Header />
      <Hero />
      <Exchange />
      <ExchangeTable />
      <Section_a />
      <Section_b />
      <Section_c />
      <Section_d />
    </main>
  );
}
