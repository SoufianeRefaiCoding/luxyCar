/** @type {import('tailwindcss').Config} */
const flowbitePlugin = require("flowbite/plugin");
const formsPlugin = require("@tailwindcss/forms");
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        extend: {
            fontFamily: {
                car: ["Rubik"],
            },
            colors: {
                pr: {
                    100: "#e3f2fd", // Light Sky Blue
                    200: "#90caf9", // Soft Blue
                    300: "#64b5f6", // Primary Blue
                    400: "#42a5f5", // Stronger Blue
                    500: "#2196f3", // Vibrant Blue
                    600: "#1e88e5", // Deep Blue
                    700: "#1976d2", // Navy Blue
                    800: "#1565c0", // Rich Navy
                    900: "#0d47a1", // Dark Navy
                },
                sec: {
                    100: "#fafafa",
                    200: "#ffd799",
                    300: "#f7f7f8",
                    400: "#f5f5f6",
                    500: "#dddddd",
                    600: "#eeeeee",
                    700: "#c4c4c4",
                    800: "#acacac",
                    900: "#acacac",
                },
            }
            
            
        },
    },
    plugins: [flowbitePlugin, formsPlugin,],
};

