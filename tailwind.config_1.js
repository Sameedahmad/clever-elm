module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    inset: {
      0: 0,
      auto: "auto",
      "1/2": "50%",
    },
    fontFamily: {
      sans: ["Arial", "Helvetica", "sans-serif"],
    },
    extend: {
      colors: {
        orange: {
          100: "#fff6f0",
          200: "#ffd1b3",
          300: "#ffaf7a",
          400: "#ff8b3d",
          500: "#ff6600",
          600: "#cc5200",
          700: "#993d00",
          800: "#662900",
          900: "#331400",
        },
        purple: {
          100: "#f6f0fe",
          200: "#d7bffc",
          300: "#bb93fb",
          400: "#9c62f9",
          500: "#8036f7",
          600: "#5c09e2",
          700: "#4407a7",
          800: "#2c046c",
          900: "#140231",
        },
      },
    },
    container: {
      padding: {
        default: "1.5rem",
        sm: "1.5rem",
        lg: "1.5rem",
        xl: "0",
      },
    },
  },
  variants: {
    display: ["responsive", "group-hover", "hover"],
    rotate: ["responsive", "hover", "focus", "active", "group-hover"],
  },
  plugins: [],
}
