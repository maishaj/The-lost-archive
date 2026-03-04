import Hero from "@/components/home/Hero";
import TrendingArticles from "@/components/home/TrendingArticles";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-20">
       <section>
         <Hero></Hero>
       </section>
       <section>
         <TrendingArticles></TrendingArticles>
       </section>
    </div>
  );
}
