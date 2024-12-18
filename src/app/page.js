import Hero from "./components/Hero";
import Button from "./components/Button";
import ExploreMenu from "./components/ExploreMenu";
import BestSellers from "./components/BestSellers";
import TopDeals from "./components/TopDeals";
export default function Home() {
  return (
   <div>
    <Hero/>
    <Button/>
    <ExploreMenu/>
    <BestSellers/>
    <TopDeals/>
    </div>
  );
}
