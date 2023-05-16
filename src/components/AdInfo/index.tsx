import { View, Text, ColorValue } from 'react-native';

import { styles } from './styles';
import { THEME } from '../../theme';

interface Props {
    label: string;
    value: string;
    color?: ColorValue;
}

export function AdInfo( { label, value, color = THEME.COLORS.TEXT }: Props) {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>
            {label}
        </Text>
        <Text style={[styles.value, { color: color }]} numberOfLines={1}>
            {value}
        </Text>

    </View>
  );
}