import { extendTheme, theme } from "@chakra-ui/react";

export default extendTheme({
  config: {
    initialColorMode: "dark",
  },
  colors: {
    primary: theme.colors.twitter,
  },
  styles: {
    global: {
      "html,body, #root": {
        height: "100%",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderLeftRadius: 9999,
        borderRightRadius: 9999,
      },
      size: {
        lg: {
          paddingY: 4,
          fontSize: "md",
        },
      },
    }, 
  },
});
