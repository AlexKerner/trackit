import { AppText } from "@/src/components/appText";
import Header from "@/src/components/header";
import { mockCep } from "@/src/services/mock/mock";
import { createStyles } from "@/src/styles/cep/styles";
import { useTheme } from "@/src/theme/themeProvider";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, ScrollView, TextInput, View } from "react-native";

export default function Cep() {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const [cep, setCep] = useState("");
  function formatCep(value: string) {
    const numbers = value.replace(/\D/g, "").slice(0, 8);

    if (numbers.length <= 5) return numbers;

    return `${numbers.slice(0, 5)}-${numbers.slice(5)}`;
  }
  const adress = mockCep;
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppText style={styles.title}>Localizador de Endereço</AppText>
        <AppText style={styles.subtitle}>
          Insira um CEP brasileiro para recuperar instantaneamente os detalhes
          completos de localização para sua remessa.
        </AppText>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <MaterialCommunityIcons
              name="map-marker-outline"
              size={28}
              color={theme.primary}
            />
            <TextInput
              value={formatCep(cep)}
              onChangeText={(text) => {
                const onlyNumbers = text.replace(/\D/g, "");
                setCep(onlyNumbers.slice(0, 8));
              }}
              placeholder="00000-000"
              placeholderTextColor={theme.disable}
              style={styles.input}
            />
          </View>

          <Pressable style={styles.button}>
            <AppText style={styles.buttonText}>Buscar</AppText>
          </Pressable>
        </View>

        <View style={styles.card}>
          <AppText style={styles.cardTitle}>NOME DA RUA</AppText>
          <AppText style={styles.cardText}>
            {adress.data.nomeLogradouro}
          </AppText>
        </View>
        <View style={[styles.card, { backgroundColor: theme.primary }]}>
          <AppText style={[styles.cardTitle, { color: "#FFF" }]}>
            ESTADO
          </AppText>
          <AppText style={styles.cardStateText}>{adress.data.uf}</AppText>
          <AppText style={styles.cardSubText}>
            {adress.data.nomeMunicipio}
          </AppText>
        </View>
        <View style={[styles.card, { backgroundColor: theme.surface }]}>
          <AppText style={styles.cardTitle}>BAIRRO</AppText>
          <AppText style={styles.cardText}>{adress.data.bairro}</AppText>
        </View>
        <Pressable>
          <View style={styles.copy}>
            <MaterialCommunityIcons
              name="content-copy"
              size={24}
              color={theme.primary}
            />
            <AppText style={styles.copyText}>Copiar endereço</AppText>
          </View>
        </Pressable>
      </ScrollView>
    </View>
  );
}
