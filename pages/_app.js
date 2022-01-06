import "destyle.css"
import { globalCss } from "@stitches/react"

const globalStyles = globalCss({
  body: {
    fontFamily: "sans-serif",
  },
})

function MyApp({ Component, pageProps }) {
  globalStyles()
  return <Component {...pageProps} />
}

export default MyApp
