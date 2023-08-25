import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        "cover": "0px 25px 40px -20px rgba(0, 0, 0, 0.10)"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "image-oval": "url('/Oval.png')",
        "image-oval-mobile": "url('/Oval-mobile.png')",
      },
      colors: {
        black: "#022959",
        primary: "#483EFF",
        grey: "#9699AA",
        lightGrey: "#D6D9E6",
        red: "#EE374A",
        lightSky: "#EFF5FF",
        lightBlue: "#ABBCFF",
        veryLightGrey: "#F8F9FF",
        denim: "#022959",
        oval: "#BEE2FD",
        purple: "#483EFF",
      },
    },
  },
  plugins: [],
}
export default config
