/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {}, // You can add theme customizations here
  },
  content: [
    "./index.html", // Make sure this includes your HTML files
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure it also covers your React component files
  ],
  plugins: [
  ],
};
