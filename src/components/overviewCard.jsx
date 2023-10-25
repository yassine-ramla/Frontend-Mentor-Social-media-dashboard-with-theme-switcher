import FormatFollowersNumber from "../utils/formatFollowersNumber";

export default function OverviewCard({
  header = "Likes",
  icon,
  number = 0,
  percentage = 0,
  dark = false,
}) {
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
          src={`/frontend-mentor-social-media-dashboard-with-theme-switcher/assets/icon-${icon}.svg`}
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
            src={`/frontend-mentor-social-media-dashboard-with-theme-switcher/assets/icon-${percentage > 0 ? "up" : "down"}.svg`}
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
