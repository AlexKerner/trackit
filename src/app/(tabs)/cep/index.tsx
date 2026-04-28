import { AppText } from "@/src/components/appText";
import Header from "@/src/components/header";
import { getAddressByCep } from "@/src/services/axios/api/cep";
import { CepData } from "@/src/services/cepModel/cepModel";
import { createStyles } from "@/src/styles/cep/styles";
import { useTheme } from "@/src/theme/themeProvider";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  TextInput,
  View,
} from "react-native";
import Toast from "react-native-toast-message";

export default function Cep() {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const [cepText, setCepText] = useState("");
  const [cep, setCep] = useState<CepData>();
  const [isLoading, setIsLoading] = useState(false);
  function formatCep(value: string) {
    const numbers = value.replace(/\D/g, "").slice(0, 8);

    if (numbers.length <= 5) return numbers;

    return `${numbers.slice(0, 5)}-${numbers.slice(5)}`;
  }
  async function handleSearchCep(code: string) {
    setIsLoading(true);

    try {
      const response = await getAddressByCep(code);
      console.log(response);

      setCep(response.data);
    } catch (error: any) {
      console.log(error);

      const message = error.response?.data?.message || "Erro ao buscar CEP";

      Toast.show({
        type: "error",
        text1: message,
      });
      setCepText("");
      setCep(undefined);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
      >
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
              value={formatCep(cepText)}
              onChangeText={(text) => {
                const onlyNumbers = text.replace(/\D/g, "");
                setCepText(onlyNumbers.slice(0, 8));
              }}
              placeholder="00000-000"
              placeholderTextColor={theme.disable}
              keyboardType="number-pad"
              style={styles.input}
            />
          </View>

          <Pressable
            style={styles.button}
            onPress={() => handleSearchCep(cepText)}
          >
            {!isLoading ? (
              <AppText style={styles.buttonText}>Buscar</AppText>
            ) : (
              <ActivityIndicator color="#fff" />
            )}
          </Pressable>
        </View>

        {cep && (
          <>
            {(cep.logradouro || cep.nomeLogradouro) && (
              <View style={styles.card}>
                <AppText style={styles.cardTitle}>NOME DA RUA</AppText>
                <AppText style={styles.cardText}>
                  {cep.logradouro || cep.nomeLogradouro}
                </AppText>
              </View>
            )}

            <View style={[styles.card, { backgroundColor: theme.primary }]}>
              <AppText style={[styles.cardTitle, { color: "#FFF" }]}>
                ESTADO
              </AppText>
              <AppText style={styles.cardStateText}>{cep.uf}</AppText>
            </View>

            <View style={[styles.card, { backgroundColor: theme.primary }]}>
              <AppText style={[styles.cardTitle, { color: "#FFF" }]}>
                Município
              </AppText>
              <AppText style={styles.cardStateText}>
                {cep.nomeMunicipio}
              </AppText>
            </View>

            {cep.bairro && (
              <View style={[styles.card, { backgroundColor: theme.surface }]}>
                <AppText style={styles.cardTitle}>BAIRRO</AppText>
                <AppText style={styles.cardText}>{cep.bairro}</AppText>
              </View>
            )}

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
          </>
        )}
      </ScrollView>
    </View>
  );
}
