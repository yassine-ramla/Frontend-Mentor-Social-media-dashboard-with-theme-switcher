import FormatFollowersNumber from "../utils/formatFollowersNumber";
import facebookIcon from "../assets/images/icon-facebook.svg";
import instagramIcon from "../assets/images/icon-instagram.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";
import youtubeIcon from "../assets/images/icon-youtube.svg";
import upIcon from "../assets/images/icon-up.svg";
import downIcon from "../assets/images/icon-down.svg";

export default function OverviewCard({
  header = "Likes",
  icon,
  number = 0,
  percentage = 0,
  up = true,
  dark = false,
}) {
  const iconSource =
    icon === "facebook"
      ? facebookIcon
      : icon === "instagram"
      ? instagramIcon
      : icon === "twitter"
      ? twitterIcon
      : youtubeIcon;

  return (
    <article
      className={`w-full flex flex-col gap-y-4 p-6 rounded-md ${
        dark
          ? "bg-myDarkDesaturatedBlueCardBG hover:bg-myDarkDesaturatedBlueHoveredCardBG"
          : "bg-myLightGrayishBlueCardBG hover:bg-myLightGrayishBlueHoveredCardBG"
      }`}
    >
      <div className="w-full flex justify-between items-center duration-200">
        <h2
          className={`${
            dark ? "text-myDesaturatedBlueText" : "text-myDarkGrayishBlueText"
          } font-bold duration-200`}
        >
          {header}
        </h2>
        <img
          src={iconSource}
          alt={`${icon} icon`}
        />
      </div>
      <div className="w-full flex justify-between items-end">
        <p
          className={`text-4xl ${
            dark ? "text-white" : "text-myVeryDarkBlueText"
          } font-bold duration-200`}
        >
          {FormatFollowersNumber(number)}
        </p>
        <div className="flex justify-center items-center gap-x-1">
          <img
            src={
              percentage > 0
                ? upIcon
                : downIcon
            }
            alt={percentage > 0 ? "up icon" : "down icon"}
          />
          <p
            className={`text-sm font-bold ${
              percentage > 0 ? "text-myLimeGreen" : "text-myBrightRed"
            }`}
          >
            {Math.abs(percentage)}%
          </p>
        </div>
      </div>
    </article>
  );
}
