import FormatFollowersNumber from "../utils/formatFollowersNumber";
import facebookIcon from "../assets/images/icon-facebook.svg";
import instagramIcon from "../assets/images/icon-instagram.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";
import youtubeIcon from "../assets/images/icon-youtube.svg";
import upIcon from "../assets/images/icon-up.svg";
import downIcon from "../assets/images/icon-down.svg";

export default function SocialMediaCard({
  platform,
  user = "unkonwn",
  followers = 0,
  difference = 0,
  dark = false,
}) {
  const iconSource =
    platform === "facebook"
      ? facebookIcon
      : platform === "instagram"
      ? instagramIcon
      : platform === "twitter"
      ? twitterIcon
      : youtubeIcon;

  return (
    <article
      className={`w-full ${
        dark
          ? "bg-myDarkDesaturatedBlueCardBG hover:bg-myDarkDesaturatedBlueHoveredCardBG"
          : "bg-myLightGrayishBlueCardBG hover:bg-myLightGrayishBlueHoveredCardBG"
      } flex flex-col justify-center items-center gap-y-6 p-8 rounded-lg overflow-hidden relative before:absolute before:w-full before:h-1 ${
        platform === "facebook"
          ? "before:bg-myFacebookColor"
          : platform === "instagram"
          ? "before:bg-instagramGradient"
          : platform === "twitter"
          ? "before:bg-myTwitterColor"
          : "before:bg-myYouTubeColor"
      } before:top-0 duration-200`}
    >
      <div className="flex gap-x-2 justify-center items-center">
        <img src={iconSource} alt={`${platform} logo`} />
        <p
          className={`${
            dark ? "text-myDesaturatedBlueText" : "text-myDarkGrayishBlueText"
          } font-bold duration-200`}
        >
          {user}
        </p>
      </div>
      <div>
        <h2
          className={`text-6xl mb-1 text-center ${
            dark ? "text-white" : "text-myVeryDarkBlueText"
          } font-bold duration-200`}
        >
          {FormatFollowersNumber(followers)}
        </h2>
        <p
          className={`tracking-[4px] text-center ${
            dark ? "text-myDesaturatedBlueText" : "text-myDarkGrayishBlueText"
          } font-normal duration-200`}
        >
          FOLLOWERS
        </p>
      </div>
      <div className="flex justify-center items-center gap-x-1">
        <img
          src={
            difference > 0
              ? upIcon
              : downIcon
          }
          alt="up icon"
        />
        <p
          className={`${
            difference > 0 ? "text-myLimeGreen" : "text-myBrightRed"
          }  font-bold`}
        >
          {FormatFollowersNumber(Math.abs(difference))} Today
        </p>
      </div>
    </article>
  );
}
