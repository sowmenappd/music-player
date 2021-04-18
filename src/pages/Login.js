import { Container, Div, Image, Text, currentDevice } from "atomize";
import { Inputfield } from "../components/InputWithRightButton";
import LoadingButton from "../components/LoadingButton";

import IMAGES from "../constants/images";

export default function Login() {
  let deviceSize = currentDevice();
  return (
    <Container d="flex" justify="center" align="center" h="100vh" w="100vw">
      <Div
        d="flex"
        align="center"
        justify="center"
        w={{ xs: "0vw", sm: "60vw", md: "45vw", lg: "35vw" }}
        border={{ r: "1px dashed" }}
      >
        <Image
          src={IMAGES.mello}
          w="80%"
          m={{ r: deviceSize === "xs" ? "0rem" : "4rem" }}
        />
      </Div>
      <Div
        d="flex"
        h="50vh"
        bg="white"
        m={{ l: deviceSize === "xs" ? "0rem" : "4rem" }}
        w={{ xs: "75vw", sm: "60vw", md: "45vw", lg: "35vw" }}
        align="center"
        justify="center"
        p="1rem"
        flexDir="column"
        rounded="lg"
        shadow="3"
        hoverShadow="4"
      >
        <Div>
          <Div
            d="flex"
            flexDir="column"
            align="center"
            justify="center"
            w="100%"
            m={{ b: "1rem" }}
          >
            <Image src={IMAGES.music} w="30%" p="20px" />
            <Text tag="h3" p="20px">
              Music Player
            </Text>
          </Div>
          <Inputfield
            label="Username"
            rounded="circle"
            m=".4rem"
            iconProps={{
              size: "22px",
            }}
          />
          <Inputfield
            label="Password"
            rounded="circle"
            m=".4rem"
            iconProps={{ name: "Lock", color: "brand700", size: "22px" }}
          />
          <LoadingButton
            rounded="lg"
            text="Login"
            buttonProps={{
              bg: "info200",
              hoverBg: "info300",
            }}
            textProps={{
              text: "Login",
              loadingText: "Loading",
              textColor: "info800",
            }}
            isLoading={false}
            iconProps={{ iconName: "Search", color: "black800" }}
          />
        </Div>
      </Div>
    </Container>
  );
}
