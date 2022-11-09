import { Box, Image } from "@chakra-ui/react";
import { LoginForm } from "../components/loginForm";

export function LoginPage() {
  return (
    <Box w="100vw" bg="#F2F2F2">
      <Box position="relative" zIndex={2}>
        <LoginForm />
        <Box position="absolute" top="0px" left="340px" zIndex={-1}>
          <Image
            src="https://i.kinja-img.com/gawker-media/image/upload/s--xyDzs1x2--/c_fit,fl_progressive,q_80,w_636/varrsizeys31wesl2eic.gif"
            alt="clock"
            boxSize="200px"
          />
        </Box>
      </Box>
    </Box>
  );
}
