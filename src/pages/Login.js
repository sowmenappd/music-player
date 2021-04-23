import { Div, Image, Text, currentDevice } from "atomize";
import Card from "components/Card";
import CenteredView from "components/CenteredView";
import { Inputfield } from "components/Inputfield";
import LoadingButton from "components/LoadingButton";

import IMAGES from "constants/images";

export default function Login() {
  let deviceSize = currentDevice();
  return (
    <CenteredView>
      <Div
        d="flex"
        align="center"
        justify="center"
        w={{ xs: "0vw", sm: "0", md: "45vw", lg: "35vw" }}
        border={{ r: "1px dashed" }}
      >
        <Image
          src={IMAGES.mello}
          w="70%"
          m={{ r: deviceSize === "xs" ? "0rem" : "2rem" }}
        />
      </Div>
      <Card
        w={{ xs: "75vw", sm: "65vw", md: "45vw", lg: "35vw" }}
        h="50%"
        m={{ l: deviceSize === "xs" ? "0rem" : "2rem" }}
      >
        <Div>
          <Div
            d="flex"
            flexDir="column"
            align="center"
            justify="center"
            w="100%"
            m={{ b: "2rem" }}
          >
            <Image src={IMAGES.music} w="30%" p="20px" />
            <Text tag="h2" p="20px" fontFamily="primary" textColor="black400">
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
            fontFamily="primary"
          />
          <Inputfield
            label="Password"
            rounded="circle"
            m=".4rem"
            iconProps={{ name: "Lock", color: "brand700", size: "22px" }}
            fontFamily="primary"
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
      </Card>
    </CenteredView>
  );
}
