import { useTheme } from "@/src/theme/themeProvider";
import { formatDate } from "@/src/utils/formatDate";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import React from "react";
import { Modal, ModalProps, Pressable, StyleSheet, View } from "react-native";
import { AppText } from "../appText";
import { createStyles } from "./styles";

type Props = ModalProps & {
  title: string;
  description: string;
  location: string;
  status: "delivered" | "in_transit" | "out_for_delivery";
  date: string;
  code: string;
  closeModal: () => void;
};

export default function ModalPackage({
  title,
  description,
  location,
  status,
  date,
  code,
  closeModal,
  ...rest
}: Props) {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const statusMap = {
    delivered: "Entregue",
    in_transit: "Em Trânsito",
    out_for_delivery: "Saiu para Entrega",
  } as const;
  return (
    <Modal {...rest} transparent animationType="fade">
      <BlurView
        intensity={130}
        style={StyleSheet.absoluteFillObject}
        tint="dark"
      >
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.header}>
              <AppText
                style={styles.descriptionText}
                ellipsizeMode="tail"
                numberOfLines={2}
              >
                {description}
              </AppText>
              <Pressable onPress={closeModal}>
                <MaterialCommunityIcons
                  name="close"
                  size={24}
                  color={theme.font}
                />
              </Pressable>
            </View>

            <AppText style={styles.titleText}>{title}</AppText>
            <View style={styles.card}>
              <View style={styles.cardIcon}>
                <MaterialCommunityIcons
                  name="truck-outline"
                  color="#fff"
                  size={14}
                />
              </View>
              <View style={styles.cardInfo}>
                <AppText style={styles.statusCard}>{statusMap[status]}</AppText>
                <AppText style={styles.locationText}>{location}</AppText>
                <AppText style={styles.dateText}>
                  Última atualização: {formatDate(date)}
                </AppText>
              </View>
            </View>
            <View style={styles.codeCard}>
              <MaterialCommunityIcons
                name="content-copy"
                color={theme.variant}
              />
              <AppText style={styles.codeCardText}>Código: {code}</AppText>
            </View>
          </View>
        </View>
      </BlurView>
    </Modal>
  );
}
