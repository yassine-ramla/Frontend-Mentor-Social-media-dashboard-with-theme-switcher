/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        instagramGradient:
          "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
        toggleBtnGradient:
          "linear-gradient(to right, hsl(210, 78%, 56%),hsl(146, 68%, 55%))",
      },
      colors: {
        // primary
        myLimeGreen: "hsl(163, 72%, 41%)",
        myBrightRed: "hsl(356, 69%, 56%)",
        myFacebookColor: "hsl(208, 92%, 53%)",
        myTwitterColor: "hsl(203, 89%, 53%)",
        myYouTubeColor: "hsl(348, 97%, 39%)",
        // dark theme
        myVeryDarkBlueBG: "hsl(230, 17%, 14%)",
        myVeryDarkBlueTopPattern: "hsl(232, 19%, 17%)",
        myDarkDesaturatedBlueCardBG: "hsl(228, 28%, 20%)",
        myDarkDesaturatedBlueHoveredCardBG: "hsl(228, 28%, 25%)",
        myDesaturatedBlueText: "hsl(228, 34%, 66%)",
        // light theme
        myVeryPaleBlueTopPattern: "hsl(225, 100%, 98%)",
        myLightGrayishBlueCardBG: "hsl(227, 47%, 96%)",
        myLightGrayishBlueHoveredCardBG: "hsl(227, 47%, 91%)",
        myDarkGrayishBlueText: "hsl(228, 12%, 44%)",
        myVeryDarkBlueText: "hsl(230, 17%, 14%)",
        myLightToggleButton: "hsl(230, 22%, 74%)",
      },
      fontFamily: {
        myFont: "'Inter', sans-serif",
      },
    },
  },
  plugins: [],
};
