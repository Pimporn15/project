import { Box} from "@chakra-ui/react";
import { LoginForm } from "../components/loginForm";
import { Time } from "../components/time";

export function LoginPage() {
  return (
    <Box w="100vw" bg="#FFFFFF">
      <Box position="relative" zIndex={2}>
        <Time />
        <LoginForm />
      </Box>
    </Box>
  );
}
