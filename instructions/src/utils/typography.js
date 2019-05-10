import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  headerFontFamily: ["Poppins", "sans-serif"],
  googleFonts: [
    {
      name: "Arvo",
      styles: ["400i"],
    },
    {
      name: "Poppins",
      styles: ["600"],
    },
    {
      name: "Lato",
      styles: ["400", "700"],
    },
  ],
  bodyFontFamily: ["Lato", "sans-serif"],
  overrideStyles: ({ adjustFontSizeTo, rhythm }) => ({
    h1: {
      fontFamily: ["Arvo", "serif"].join(","),
      marginBottom: "0.5em",
    },
    "h2,h3,h4,h5": {
      fontFamily: ["Poppins, sans-serif"].join(","),
      textTransform: "uppercase",
      letterSpacing: "1px",
      lineHeight: "1.2em",
    },
    h3: {
      fontSize: "14px"
    },
    a: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
    "a:link": {
      textDecoration: "none",
    },
    "a:hover": {
      textDecoration: "underline",
    },
    blockquote: {
      ...adjustFontSizeTo("19px"),
      color: "gray",
      fontStyle: "italic",
      paddingLeft: rhythm(13 / 16),
      marginLeft: rhythm(-1),
      marginTop: "1em",
      borderLeft: `${rhythm(3 / 16)} solid gray`,
    },
    "blockquote > :last-child": {
      marginBottom: 0,
    },
    "a.footer-link": {
      fontFamily: ["Lato", "sans-serif"].join(","),
    },
    "a.footer-link:hover": {
      fontWeight: "bold",
      textDecoration: "none",
    },
  }),
})

export const { scale, rhythm, options } = typography
export default typography
