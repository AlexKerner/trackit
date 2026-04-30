import { AppText } from "@/src/components/appText";
import EmptyState from "@/src/components/emptyState";
import Header from "@/src/components/header";
import RecentCard from "@/src/components/recentCard";
import { Package } from "@/src/services/packageModel/packageModel";
import { packageStorage } from "@/src/storage/packageStore";
import { createStyles } from "@/src/styles/dashboard/styles";
import { useTheme } from "@/src/theme/themeProvider";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { FlatList, View } from "react-native";

export default function Dashboard() {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const [packages, setPackages] = useState<Package[]>([]);

  const statusStyle = {
    delivered: {
      icon: "check-circle",
      iconColor: theme.green,
      iconBg: theme.greenContrast,
      image: require("@/src/assets/delivered.png"),
    },
    out_for_delivery: {
      icon: "motorbike",
      iconColor: "#FFF",
      iconBg: theme.primary,
      image: require("@/src/assets/out_for_delivery.png"),
    },
  } as const;

  useFocusEffect(
    useCallback(() => {
      async function handleGetPackages() {
        const response = await packageStorage.getPackage();
        setPackages(response);
      }
      handleGetPackages();
    }, []),
  );

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={packages}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <AppText style={styles.title}>Olá!</AppText>
            {packages.length > 0 ? (
              <>
                <View style={styles.card}>
                  <View style={styles.cardHeader}>
                    <View style={styles.iconContainer}>
                      <MaterialCommunityIcons
                        name="truck-outline"
                        size={25}
                        color="#FFF"
                      />
                    </View>
                    <View style={styles.status}>
                      <AppText style={styles.statusText}>ATIVO</AppText>
                    </View>
                  </View>

                  <AppText style={styles.num}>
                    {packages.filter((p) => p.status === "in_transit").length}
                  </AppText>
                  <AppText style={styles.subNum}>Em Trânsito</AppText>
                </View>

                <View style={styles.subCards}>
                  <View style={styles.subCardsContent}>
                    <View style={styles.cardHeader}>
                      <View
                        style={[
                          styles.subIconContainer,
                          { backgroundColor: theme.greenContrast },
                        ]}
                      >
                        <MaterialCommunityIcons
                          name="check-circle"
                          size={18}
                          color={theme.green}
                        />
                      </View>
                      <AppText style={styles.subStatusText}>ENTREGUES</AppText>
                    </View>

                    <AppText style={styles.numSub}>
                      {packages.filter((p) => p.status === "delivered").length}
                    </AppText>
                  </View>

                  <View style={styles.subCardsContent}>
                    <View style={styles.cardHeader}>
                      <View
                        style={[
                          styles.subIconContainer,
                          { backgroundColor: theme.primary },
                        ]}
                      >
                        <MaterialCommunityIcons
                          name="motorbike"
                          size={18}
                          color="#FFF"
                        />
                      </View>
                      <AppText style={styles.subStatusText}>
                        SAIU PARA ENTREGA
                      </AppText>
                    </View>
                    <AppText style={styles.numSub}>
                      {
                        packages.filter((p) => p.status === "out_for_delivery")
                          .length
                      }
                    </AppText>
                  </View>
                </View>
                <AppText style={styles.recentText}>Atividade Recente</AppText>
              </>
            ) : (
              <EmptyState />
            )}
          </>
        }
        contentContainerStyle={{ gap: 15 }}
        renderItem={({ item }) => (
          <RecentCard
            status={item.status}
            icon={
              item.status === "delivered"
                ? statusStyle.delivered.icon
                : statusStyle.out_for_delivery.icon
            }
            backgroundIcon={
              item.status === "delivered"
                ? statusStyle.delivered.iconBg
                : statusStyle.out_for_delivery.iconBg
            }
            colorIcon={
              item.status === "delivered"
                ? statusStyle.delivered.iconColor
                : statusStyle.out_for_delivery.iconColor
            }
            image={
              item.status === "delivered"
                ? statusStyle.delivered.image
                : statusStyle.out_for_delivery.image
            }
            locale={item.local}
            nickname={item.nickname || ""}
            date={item.date}
          />
        )}
      />
    </View>
  );
}
