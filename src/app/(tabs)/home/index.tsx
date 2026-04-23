import { AppText } from "@/src/components/appText";
import FloatButton from "@/src/components/floatButton";
import Header from "@/src/components/header";
import PackageCard from "@/src/components/packageCard";
import { mockPackages } from "@/src/services/mock/mock";
import { createStyles } from "@/src/styles/home/styles";
import { useTheme } from "@/src/theme/themeProvider";
import { FlatList, View } from "react-native";

export default function Home() {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const packages = mockPackages;
  const statusOrder = {
    out_for_delivery: 0,
    in_transit: 1,
    delivered: 2,
  } as const;
  const sortedPackages = [...packages].sort((a, b) => {
    return statusOrder[a.status] - statusOrder[b.status];
  });
  return (
    <>
      <FloatButton />
      <View style={styles.container}>
        <Header />
        <View style={styles.header}>
          <AppText style={styles.subtitle}>ENCOMENDAS ATIVAS</AppText>
          <AppText style={styles.title}>{packages.length} Pacotes</AppText>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={sortedPackages}
          keyExtractor={(item) => item.id}
          style={styles.packages}
          contentContainerStyle={styles.packageContent}
          renderItem={({ item }) => (
            <PackageCard
              name={item.nickname}
              status={item.status}
              date={item.date}
              description={item.description}
              onDetails={() => console.log("detalhes")}
            />
          )}
        />
      </View>
    </>
  );
}
