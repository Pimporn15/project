import { Box,Flex,Center,keyframes, } from "@chakra-ui/react";
import { LoginForm } from "../components/loginForm";
import { Time } from "../components/time";
import { ParticleLogin } from "../components/particle";
import { useAuth } from "../contexts/authentication";


export function LoginPage() {
  const size = "150px";
  const color = "#EF9A53";
  const { state } = useAuth();
  const pulseRing = keyframes`
        0% {
        transform: scale(0.33);
      }
      40%,
      50% {
        opacity: 0;
      }
      100% {
        opacity: 0;
      }
        `;


  return (
    <Flex w="100%" h="100%">
      <Box mt="50px" ml="10%"  >
        <Flex  
        as="div"
        position="relative"
        w={size}
        h={size}
        _before={{
          content: "''",
          position: "relative",
          display: "block",
          width: "300%",
          height: "300%",
          boxSizing: "border-box",
          marginLeft: "-100%",
          marginTop: "-100%",
          borderRadius: "50%",
          bgColor: color,
          animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
        }}>
          <Box  fontSize={"3rem"}>
       <Time />
           </Box>

</Flex>


       </Box>
       <Box>
       <Center ml="250px">
      <ParticleLogin />
      <LoginForm position="relative" />
      </Center>
      </Box>
    </Flex>
  );
}
