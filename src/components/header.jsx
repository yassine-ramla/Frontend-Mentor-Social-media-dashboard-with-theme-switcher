import ToggleBtn from "./toggleBtn.jsx";

export default function Header({ totalFollowers = 0, dark = false }) {
  return (
    <header className="w-full xl:w-fit pb-5 border-b xl:border-none border-b-myDesaturatedBlueText">
      <h1
        className={`text-2xl xl:text-3xl ${
          dark ? "text-white" : "text-myVeryDarkBlueText"
        } font-bold duration-200`}
      >
        Social Media Dashboard
      </h1>
      <p className={`text-md ${dark ? "text-myDesaturatedBlueText" : "text-myDarkGrayishBlueText"} font-bold duration-200`}>
        Total Followers: {totalFollowers}
      </p>
    </header>
  );
}
