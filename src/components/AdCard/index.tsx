import { View, TouchableOpacity, Text } from 'react-native';
import { GameController } from 'phosphor-react-native';
import { styles } from './styles';
import { AdInfo } from '../AdInfo';
import { THEME } from '../../theme';


export interface AdCardProps {
  id: string;
  name: string;
  weekDay: string[];
  hourStart: string;
  hourEnd: string;
  yearsPlaying: number;
  useVoice: boolean;
}

interface Props {
  data: AdCardProps;
  onConnect: () => void;
}

export function AdCard({ data, onConnect }: Props) {
  return (
    <View style={styles.container}>

      <AdInfo
        label='Nome'
        value={data.name}
      />

      <AdInfo
        label='Tempo de jogo'
        value={`${data.yearsPlaying} anos`}
      />

      <AdInfo
        label='Disponibilidade'
        value={`${data.weekDay.length} dias \u2022 ${data.hourStart}h - ${data.hourEnd}h`}
      />

      <AdInfo
        label='Chat de voz'
        value={data.useVoice ? 'Sim' : 'Não'}
        color={data.useVoice ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />

      <TouchableOpacity style={styles.button} onPress={onConnect}>
        <GameController size={24} color={THEME.COLORS.TEXT} />
        <Text style={styles.buttonTitle}>Conectar</Text>
      </TouchableOpacity>
      


    </View>
  );
}