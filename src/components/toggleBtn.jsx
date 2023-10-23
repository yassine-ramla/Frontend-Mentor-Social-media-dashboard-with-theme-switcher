export default function ToggleBtn({ dark = false, toggleMode }) {
  return (
    <section className="w-full xl:w-fit flex justify-between xl:gap-x-4 items-center duration-200">
      <h2
        className={`text-md ${
          dark ? "text-myDesaturatedBlueText" : "text-myDarkGrayishBlueText"
        } font-bold duration-200`}
      >
        Dark Mode
      </h2>
      <div
        className={`w-[48px] h-[24px] rounded-full ${
          dark ? "bg-toggleBtnGradient" : "bg-myLightToggleButton hover:bg-toggleBtnGradient"
        } relative`}
        onClick={toggleMode}
      >
        <div
          className={`h-[20px] aspect-square rounded-full ${
            dark ? "bg-myVeryDarkBlueBG" : "bg-white"
          } absolute ${dark ? "left-[2px]" : "left-[26px]"} top-[2px] duration-200`}
        ></div>
      </div>
    </section>
  );
}
