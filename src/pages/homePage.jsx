import data from "../data/data.json";
import { useState } from "react";
import Header from "../components/header";
import OverviewCard from "../components/overviewCard";
import SocialMediaCard from "../components/socialMediaCard";
import ToggleBtn from "../components/toggleBtn";
import calculateTotalFollowers from "../utils/calculateTotalFollowers";
import CalculatePercentage from "../utils/calculatePercentage";

export default function HomePage() {
  const [dark, setDark] = useState(false);
  const toggleModeState = () => {
    setDark(!dark);
  };
  const user = data[0].user;
  return (
    <div
      className={`w-screen min-h-[100svh] ${
        dark ? "bg-myVeryDarkBlueBG" : "bg-white"
      } px-6 py-10 xl:py-8 flex  flex-col items-center relative duration-200`}
    >
      <div
        className={`w-full h-[250px] rounded-bl-3xl rounded-br-3xl ${
          dark ? "bg-myVeryDarkBlueTopPattern" : "bg-myVeryPaleBlueTopPattern"
        } absolute top-0 left-0 -z-0`}
      ></div>
      <div className="w-full max-w-5xl xl:max-w-6xl flex flex-col xl:flex-row justify-center xl:justify-between items-center gap-y-4 z-10">
        <Header totalFollowers={calculateTotalFollowers(data[0])} dark={dark} />
        <ToggleBtn dark={dark} toggleMode={toggleModeState} />
      </div>
      <div className="w-full max-w-5xl xl:max-w-6xl py-10 xl:py-5 flex flex-col xl:flex-row xl:gap-x-6 gap-y-6">
        {data[0].statistics.map((element, index) => {
          return (
            <SocialMediaCard
              platform={element.platform}
              user={user}
              followers={element.followers.total}
              difference={element.followers.today}
              dark={dark}
              key={index}
            />
          );
        })}
      </div>
      <h2 className={`w-full max-w-5xl xl:max-w-6xl text-2xl xl:text-[26px] ${dark ? "text-white" : "text-myDarkGrayishBlueText"} font-bold pt-2 xl:pt-6 pb-6`}>
        Overview - Today
      </h2>
      <div className="w-full max-w-5xl xl:max-w-6xl flex flex-col xl:grid xl:grid-rows-2 xl:grid-cols-2 xl:gap-x-6 justify-center items-center gap-y-5">
        {data[0].statistics.map((element, index) => {
          const icon = element.platform;
          const header1 =
            icon === "facebook"
              ? "Page Views"
              : icon === "instagram"
              ? "Profile Views"
              : icon === "twitter"
              ? "Retweets"
              : "Total Views";
          const today1 = element.interaction.today;
          const today2 = element.likes.today;
          const lastday1 = element.interaction.lastDay;
          const lastday2 = element.likes.lastDay;
          return (
            <div className="w-full flex flex-col xl:flex-row xl:gap-x-6 gap-y-5" key={index}>
              <OverviewCard
                icon={icon}
                header={header1}
                number={today1}
                percentage={CalculatePercentage(today1, lastday1)}
                dark={dark}
              />
              <OverviewCard
                icon={icon}
                number={today2}
                percentage={CalculatePercentage(today2, lastday2)}
                dark={dark}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
