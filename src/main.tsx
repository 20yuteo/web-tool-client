import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider>
    <React.StrictMode>
      <Auth0Provider
        domain="dev--5d5d4yp.us.auth0.com"
        clientId="MUYxPX0wF8S742KaY48r8AxZKIZN11sc"
        authorizationParams={{
          redirect_uri: window.location.origin,
          audience: "http://localhost:8000",
          scope: "openid profile email",
        }}
      >
        <App />
      </Auth0Provider>
    </React.StrictMode>
    ,
  </ChakraProvider>
);
