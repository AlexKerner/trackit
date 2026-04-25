import { useTheme } from "@/src/theme/themeProvider";
import { formatDate } from "@/src/utils/formatDate";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, PressableProps, View } from "react-native";
import { AppText } from "../appText";
import { createStyles } from "./styles";

type Props = PressableProps & {
  name?: string;
  status: "delivered" | "in_transit" | "out_for_delivery";
  description: string;
  date: string;
  onDetails: () => void;
};

export default function PackageCard({
  name,
  status,
  description,
  date,
  onDetails,
}: Props) {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  const statusMap = {
    delivered: "ENTREGUE",
    in_transit: "EM TRÂNSITO",
    out_for_delivery: "SAIU PARA ENTREGA",
  } as const;
  const statusStyle = {
    delivered: {
      icon: "package-variant",
      iconColor: theme.disable,
      bgIcon: theme.variant,
      backgroundColor: theme.bg,
      statusColor: theme.disable,
    },
    in_transit: {
      icon: "package-variant-closed",
      iconColor: "#fff",
      bgIcon: theme.primary,
      backgroundColor: theme.surface,
      statusColor: theme.variant,
    },
    out_for_delivery: {
      icon: "motorbike",
      iconColor: theme.greenContrast,
      bgIcon: theme.green,
      backgroundColor: theme.primary,
      statusColor: "#665cd0",
    },
  } as const;
  const style = statusStyle[status];

  return (
    <View
      style={[styles.container, { backgroundColor: style.backgroundColor }]}
    >
      <Pressable onPress={onDetails}>
        <View style={styles.content}>
          <View>
            <View style={[styles.icon, { backgroundColor: style.bgIcon }]}>
              <MaterialCommunityIcons
                name={style.icon}
                size={22}
                color={style.iconColor}
              />
            </View>
          </View>
          <View style={[styles.status, { backgroundColor: style.statusColor }]}>
            <AppText style={styles.statusText}>{statusMap[status]}</AppText>
          </View>
        </View>
        <View>
          <AppText style={styles.title} numberOfLines={2} ellipsizeMode="tail">
            {name}
          </AppText>
        </View>

        <View style={styles.footer}>
          <AppText style={styles.date}>{formatDate(date)}</AppText>

          <MaterialCommunityIcons
            name="chevron-right"
            size={25}
            color={theme.font}
          />
        </View>
      </Pressable>
    </View>
  );
}
