import { FaHome, FaSignInAlt, FaSignOutAlt } from "react-icons/fa"
import { Heading, Button, Icon } from "@chakra-ui/react"
import { useColorMode } from "@chakra-ui/react"

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div style={{
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      position: "sticky",
      top: 0,
      borderBottom: "1px solid var(--chakra-colors-gray-200)",
      backgroundColor: `${colorMode === "light" ? "var(--chakra-colors-white)" : "var(--chakra-colors-black)"}`,
      padding: "10px 20px",
      alignItems: "center"
    }}>
      <Heading size="lg" cursor="pointer">
        Web Tools
      </Heading>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "16px"
      }}>
        <Button onClick={toggleColorMode} fontSize={32}>
          {colorMode === 'light' ? "🌜" : "🌞"}
        </Button>
        <Icon as={FaHome} boxSize={6} cursor="pointer" />
        <Icon as={FaSignInAlt} boxSize={6} cursor="pointer" />
        <Icon as={FaSignOutAlt} boxSize={6} cursor="pointer" />
      </div>
    </div>
  )
};

export { Header };