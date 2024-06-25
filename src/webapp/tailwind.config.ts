import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
  theme: {
    colors: {
      devblue: "#0078B7"
    }
  }
};
export default config;
