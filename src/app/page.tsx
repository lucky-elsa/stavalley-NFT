import MainLayout from "@/components/layouts/MainLayout";
import CloudText from "@/components/CloudText";
import PlayJoin from "@/components/PlayJoin";
import CustomHouse from "@/components/CustomHouse";
import MarqueeText from "@/components/MarqueeText";
import BossMode from "@/components/BossMode";
import ClaimToken from "@/components/ClaimToken";
import JoinCommunity from "@/components/JoinCommunity";

export default function Home() {
  return (
    <MainLayout>
      <CloudText />
      <PlayJoin />
      <CustomHouse />
      <MarqueeText />
      <JoinCommunity />
      <BossMode />
      <ClaimToken />
    </MainLayout>
  );
}
