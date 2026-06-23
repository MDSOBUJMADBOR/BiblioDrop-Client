import HeroBanner from "@/components/Banner";
import PopularCategories from "@/components/Categories";
import Librarian from "@/components/Librarian";
import StatsSection from "@/components/StatsSection";



export default function Home() {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <StatsSection></StatsSection>
      <Librarian></Librarian>
      <PopularCategories></PopularCategories>
    </div>
  );
}
