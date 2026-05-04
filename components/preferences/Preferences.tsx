import { LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native";
import { useState } from "react";

import useTheme from "@/hooks/useTheme";
import { createSettingsStyles } from "@/assets/styles/settings.styles";
import PreferenceItem from "@/components/preferences/PreferencesItem";

const Preferences = () => {
  const { isDarkMode, toggleDarkMode, colors } = useTheme();

  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [isAutoSync, setIsAutoSync] = useState(true);

  const styles = createSettingsStyles(colors);

  return (
    <LinearGradient colors={colors.gradients.surface} style={styles.section}>
      <Text style={styles.sectionTitle}>Preferences</Text>

      <PreferenceItem
        icon="moon"
        label="Dark Mode"
        value={isDarkMode}
        onToggle={toggleDarkMode}
        gradient={colors.gradients.primary}
        activeColor={colors.primary}
      />

      <PreferenceItem
        icon="notifications"
        label="Notifications"
        value={isNotificationsEnabled}
        onToggle={() => setIsNotificationsEnabled(!isNotificationsEnabled)}
        gradient={colors.gradients.warning}
        activeColor={colors.warning}
      />

      <PreferenceItem
        icon="sync"
        label="Auto Sync"
        value={isAutoSync}
        onToggle={() => setIsAutoSync(!isAutoSync)}
        gradient={colors.gradients.success}
        activeColor={colors.success}
      />
    </LinearGradient>
  );
};

export default Preferences;
