import ArchiveStats from "@/components/home/ArchiveStats";
import FeaturedRecord from "@/components/home/FeaturedRecord";
import Hero from "@/components/home/Hero";
import Newsletter from "@/components/home/Newsletter";
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
       <section>
         <FeaturedRecord></FeaturedRecord>
       </section>
       <section>
         <ArchiveStats></ArchiveStats>
       </section>
       <section>
         <Newsletter></Newsletter>
       </section>
    </div>
  );
}
