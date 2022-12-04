import { Box } from "@chakra-ui/react";
import { LoginForm } from "../components/loginForm";
import { Time } from "../components/time";
import { ParticleLogin } from "../components/particle";

export function LoginPage() {
  return (
    <>
      <ParticleLogin />
      <Time position="absolute" top="10%" right="5%" />
      <LoginForm position="relative" />
    </>
  );
}
