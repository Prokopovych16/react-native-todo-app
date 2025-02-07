import { Text, View } from "react-native";
import { styles } from "./Header.styles";
import { globalStyles } from "../../styles/globalStyles";

export const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={[globalStyles.boldText, styles.title]}>{title}</Text>
    </View>
  );
}