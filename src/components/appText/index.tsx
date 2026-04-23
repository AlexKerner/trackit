import { useTheme } from "@/src/theme/themeProvider";
import { Text, TextProps } from "react-native";

export function AppText({ style, ...rest }: TextProps) {
  const { theme } = useTheme();
  return (
    <Text
      style={[
        {
          fontFamily: theme.fonts.regular,
        },
        style,
      ]}
      {...rest}
    />
  );
}
