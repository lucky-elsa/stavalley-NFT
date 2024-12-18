import Header from "@/components/Header";
import CloudText from "@/components/CloudText";
import PlayJoin from "@/components/PlayJoin";
import CustomHouse from "@/components/CustomHouse";
import MarqueeText from "@/components/MarqueeText";
import BossMode from "@/components/BossMode";
import ClaimToken from "@/components/ClaimToken";
import JoinCommunity from "@/components/JoinCommunity";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full h-screen bg-black">
      <Header />
      <CloudText />
      <PlayJoin />
      <CustomHouse />
      <MarqueeText />
      <JoinCommunity />
      <BossMode />
      <ClaimToken />
      <Footer />
    </div>
  );
}
