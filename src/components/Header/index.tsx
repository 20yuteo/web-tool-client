import { FaHome, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Heading, Button, Icon, Image } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { loginWithRedirect, logout, isAuthenticated, isLoading, user } =
    useAuth0();

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        borderBottom: "1px solid var(--chakra-colors-gray-200)",
        backgroundColor: `${
          colorMode === "light"
            ? "var(--chakra-colors-white)"
            : "var(--chakra-colors-black)"
        }`,
        padding: "10px 20px",
        alignItems: "center",
      }}
    >
      <Heading size="lg" cursor="pointer">
        Web Tools
      </Heading>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <Button onClick={toggleColorMode} fontSize={32}>
          {colorMode === "light" ? "🌜" : "🌞"}
        </Button>
        <Icon as={FaHome} boxSize={6} cursor="pointer" />

        {user &&
          (user?.picture ? (
            <Image src={user.picture} boxSize={8} borderRadius={16} />
          ) : (
            <Icon as={FaUser} boxSize={6} cursor="pointer" />
          ))}

        {!isLoading &&
          (isAuthenticated ? (
            <Icon
              as={FaSignOutAlt}
              boxSize={6}
              cursor="pointer"
              onClick={() => logout()}
            />
          ) : (
            <Icon
              as={FaSignInAlt}
              boxSize={6}
              cursor="pointer"
              onClick={() => loginWithRedirect()}
            />
          ))}
      </div>
    </div>
  );
};

export { Header };
