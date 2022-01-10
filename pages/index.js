import Header from "@components/Header"
import { Box } from "src/styles/style"

export default function Home() {
  return (
    <>
      <Header />
      <Box fullWidth css={{ marginTop: "48px" }}>
        <Box>Donec sed odio dui.</Box>
      </Box>
    </>
  )
}
