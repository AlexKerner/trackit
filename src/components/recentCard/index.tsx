import { useTheme } from "@/src/theme/themeProvider";
import { getRelativeTime } from "@/src/utils/formatDate";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, ImageSourcePropType, View } from "react-native";
import { AppText } from "../appText";
import { createStyles } from "./styles";

type Props = {
  image: ImageSourcePropType;
  icon: string;
  nickname: string;
  locale: string;
  date: string;
  backgroundIcon: string;
  colorIcon: string;
  status: "delivered" | "out_for_delivery" | "in_transit";
};

export default function RecentCard({
  image,
  icon,
  nickname,
  locale,
  date,
  backgroundIcon,
  colorIcon,
  status,
}: Props) {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const statusMap = {
    delivered: "Entregue",
    in_transit: "Em Trânsito",
    out_for_delivery: "Saiu para Entrega",
  } as const;
  return (
    <View style={styles.container}>
      <View style={styles.containerStart}>
        <View style={styles.imageWrapper}>
          <Image source={image} />
          <View style={[styles.iconBadge, { backgroundColor: backgroundIcon }]}>
            <MaterialCommunityIcons
              name={icon as any}
              size={12}
              color={colorIcon}
            />
          </View>
        </View>
        <View>
          <AppText style={styles.title}>{nickname}</AppText>
          <View>
            <AppText style={styles.status}>{statusMap[status]}</AppText>
            <AppText style={styles.location}>{locale}</AppText>
          </View>
        </View>
      </View>
      <View>
        <AppText style={styles.date}>{getRelativeTime(date)}</AppText>
      </View>
    </View>
  );
}
