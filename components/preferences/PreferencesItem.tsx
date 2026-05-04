import { createSettingsStyles } from "@/assets/styles/settings.styles";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Switch, Text, View } from "react-native";

interface PreferenceItemProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: boolean;
  onToggle: () => void;
  gradient: [string, string];
  activeColor: string;
}

const PreferenceItem = ({
  icon,
  label,
  value,
  onToggle,
  gradient,
  activeColor,
}: PreferenceItemProps) => {
  const { colors } = useTheme();
  const styles = createSettingsStyles(colors);

  return (
    <View style={styles.settingItem}>
      {/* LEFT */}
      <View style={styles.settingLeft}>
        <LinearGradient colors={gradient} style={styles.settingIcon}>
          <Ionicons name={icon} size={18} color="#fff" />
        </LinearGradient>

        <Text style={styles.settingText}>{label}</Text>
      </View>

      {/* RIGHT */}
      <Switch
        value={value}
        onValueChange={onToggle}
        thumbColor="#fff"
        trackColor={{ false: colors.border, true: activeColor }}
        ios_backgroundColor={colors.border}
      />
    </View>
  );
};

export default PreferenceItem;
