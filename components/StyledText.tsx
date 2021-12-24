import { Text, TextProps } from "./Themed";

export var MonoText = (props: TextProps) => (
  <Text {...props} style={[props.style, { fontFamily: "ps" }]} />
);
