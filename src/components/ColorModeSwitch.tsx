import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { HStack, Switch, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <HStack>
      <SunIcon />
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="green"
      ></Switch>{" "}
      <MoonIcon/>
    </HStack>
  );
};

export default ColorModeSwitch;
