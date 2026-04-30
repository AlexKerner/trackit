import { AppText } from "@/src/components/appText";
import { getTracking } from "@/src/services/axios/api/trackingService";
import {
  Package,
  TrackingResponse,
} from "@/src/services/packageModel/packageModel";
import { packageStorage } from "@/src/storage/packageStore";
import { createStyles } from "@/src/styles/addPackage/styles";
import { useTheme } from "@/src/theme/themeProvider";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  TextInput,
  View,
} from "react-native";
import Toast from "react-native-toast-message";

type Status = "in_transit" | "delivered" | "out_for_delivery";

export default function AddPackage() {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  function mapStatus(detalhe: string): Status {
    const det = detalhe.toLowerCase();

    if (det.includes("entregue")) return "delivered";
    if (det.includes("saiu para entrega")) return "out_for_delivery";

    return "in_transit";
  }

  function mapTrackingToPackage(
    response: TrackingResponse,
    nickname: string,
  ): Package {
    return {
      id: Date.now().toString(),
      code: response.codigo,
      nickname,
      status: mapStatus(response.eventoMaisRecente.detalhe),
      local: response.eventoMaisRecente.local,
      date: response.eventoMaisRecente.data,
      description: response.eventoMaisRecente.descricao,
    };
  }

  async function handleAdd() {
    setLoading(true);
    try {
      const response = await getTracking(code);
      const newPackage = mapTrackingToPackage(response, name);
      await packageStorage.savePackage(newPackage);
      setName("");
      setCode("");
      setLoading(false);
      router.back();
    } catch (error: any) {
      console.log(error);

      const message =
        error.response?.data?.message || "Erro ao rastrear pacote.";

      Toast.show({
        type: "error",
        text1: message,
      });
      setCode("");
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={35}
            color={theme.font}
          />
        </Pressable>

        <AppText style={styles.titleHeader}>
          TRACK <AppText style={styles.titleHeaderContent}>IT</AppText>
        </AppText>
      </View>
      <AppText style={styles.title}>
        Rastrear <AppText style={styles.titleContent}>Nova Entrega</AppText>
      </AppText>
      <AppText style={styles.subtitle}>
        Adicione as suas informações de rastreio abaixo:
      </AppText>
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" || "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <View style={styles.form}>
          <View style={styles.formContent}>
            <View>
              <AppText style={styles.inputLabel}>CÓDIGO DE RASTREIO</AppText>
              <TextInput
                style={styles.input}
                placeholderTextColor={theme.disable}
                placeholder="Ex.: BR123456789BR"
                onChangeText={(text) => setCode(text)}
                value={code}
              />
            </View>
            <View>
              <AppText style={styles.inputLabel}>APELIDO DO PACOTE</AppText>
              <TextInput
                style={styles.input}
                placeholderTextColor={theme.disable}
                placeholder="Ex.: Teclado Mecânico"
                onChangeText={(text) => setName(text)}
                value={name}
              />
            </View>
            <Pressable style={styles.button} onPress={handleAdd}>
              {loading ? (
                <ActivityIndicator color="#FFF" />
              ) : (
                <AppText style={styles.buttonText}>Adicionar Pacote</AppText>
              )}
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
