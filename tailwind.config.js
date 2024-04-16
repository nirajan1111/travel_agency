/** @type {import('tailwindcss').Config} */
const { withUt } = require("uploadthing/tw");

module.exports = withUt({

 content: ["./src/**/*.{ts,tsx,mdx}"],
});