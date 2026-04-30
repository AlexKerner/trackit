import { AppText } from "@/src/components/appText";
import EmptyState from "@/src/components/emptyState";
import FloatButton from "@/src/components/floatButton";
import Header from "@/src/components/header";
import ModalPackage from "@/src/components/modalPackage";
import PackageCard from "@/src/components/packageCard";
import { Package } from "@/src/services/packageModel/packageModel";
import { packageStorage } from "@/src/storage/packageStore";
import { createStyles } from "@/src/styles/home/styles";
import { useTheme } from "@/src/theme/themeProvider";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { FlatList, View } from "react-native";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [packages, setPackages] = useState<Package[]>([]);
  const [selectedPackages, setSelectedPackages] = useState<Package>();
  const { theme } = useTheme();
  const styles = createStyles(theme);

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
    <>
      <View style={styles.container}>
        <FloatButton onPress={() => router.navigate("/addPackage")} />
        <Header />
        <View style={styles.header}>
          <AppText style={styles.subtitle}>ENCOMENDAS ATIVAS</AppText>
          <AppText style={styles.title}>{packages.length} Pacotes</AppText>
        </View>
        {packages.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={packages}
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
                  setSelectedPackages(item);
                }}
              />
            )}
          />
        ) : (
          <EmptyState />
        )}
        <ModalPackage
          visible={showModal}
          closeModal={() => setShowModal(false)}
          title={selectedPackages?.nickname ?? "Sem nome."}
          description={selectedPackages?.description ?? "Sem descrição."}
          status={selectedPackages?.status ?? "in_transit"}
          location={selectedPackages?.local ?? "Sem localização."}
          date={selectedPackages?.date ?? "Sem data."}
          code={selectedPackages?.code ?? "Sem código."}
        />
      </View>
    </>
  );
}
