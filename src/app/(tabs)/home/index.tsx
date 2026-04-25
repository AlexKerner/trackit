import { AppText } from "@/src/components/appText";
import FloatButton from "@/src/components/floatButton";
import Header from "@/src/components/header";
import ModalPackage from "@/src/components/modalPackage";
import PackageCard from "@/src/components/packageCard";
import { mockPackages } from "@/src/services/mock/mock";
import { Package } from "@/src/services/packageModel/packageModel";
import { createStyles } from "@/src/styles/home/styles";
import { useTheme } from "@/src/theme/themeProvider";
import { router } from "expo-router";
import { useState } from "react";
import { FlatList, View } from "react-native";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
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
      <View style={styles.container}>
        <FloatButton onPress={() => router.navigate("/addPackage")} />
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
              onDetails={() => {
                setShowModal(true);
                setSelectedPackage(item);
              }}
            />
          )}
        />
        <ModalPackage
          visible={showModal}
          closeModal={() => setShowModal(false)}
          title={selectedPackage?.nickname ?? "Sem nome."}
          description={selectedPackage?.description ?? "Sem descrição."}
          status={selectedPackage?.status ?? "in_transit"}
          location={selectedPackage?.location ?? "Sem localização."}
          date={selectedPackage?.date ?? "Sem data."}
          code={selectedPackage?.code ?? "Sem código."}
        />
      </View>
    </>
  );
}
