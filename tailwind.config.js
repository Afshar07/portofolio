/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#041F31",
        secondary: "#BDEBEA",
        netural: "#E5E5E5",
        "gradient-first": "#00F5A0",
        "gradient-second": "#00D9F5",
        "card-bg": "#222525",
        "title-color": "#D9F2F2",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: false,
    rtl: true,
    prefix: "",
    darkTheme: "dark",
  },
};
