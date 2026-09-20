import HeroBanner from "@/components/Banner";
import PopularCategories from "@/components/Categories";
import FAQSection from "@/components/FAQSection";

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
      <FAQSection />
    </div>
  );
}
