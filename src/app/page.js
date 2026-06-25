import HeroBanner from "@/components/Banner";
import PopularCategories from "@/components/Categories";
import FeaturedBooks from "@/components/Featured";
import Librarian from "@/components/Librarian";
import StatsSection from "@/components/StatsSection";



export default function Home() {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <FeaturedBooks></FeaturedBooks>
      <StatsSection></StatsSection>
      <Librarian></Librarian>
      <PopularCategories></PopularCategories>
    </div>
  );
}
