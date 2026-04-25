import { AppText } from "@/src/components/appText";
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

export default function AddPackage() {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  function handleAdd() {
    setLoading(true);
    console.log({ code, name });
    setName("");
    setCode("");
    setLoading(false);
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
