import { useState } from 'react';
import { View, Text, Modal, ModalProps, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckCircle } from 'phosphor-react-native';
import * as Clipboard from 'expo-clipboard';

import { styles } from './styles';
import { THEME } from '../../theme';
import { Heading } from '../Heading';

interface Props extends ModalProps {
    discord: string;
    onClose: () => void;
}

export function AdMatch({ discord, onClose, ...rest }: Props) {

    const [copied, setCopied] = useState(false);


    async function handleCopyDiscord({ discord, onClose, ...rest}: Props) {
        setCopied(true)
        await Clipboard.setStringAsync(discord)
        Alert.alert('Copiado!', 'Usuário copiado!')
        setCopied(false)
    }
    
  return (
    <Modal transparent statusBarTranslucent animationType='fade' {...rest }>
        <View style={styles.container}>
            <View style={styles.content}>

                <TouchableOpacity
                    style={styles.closeButton}
                    onPress={onClose}
                >
                    <MaterialIcons
                        name="close"
                        size={24}
                        color={THEME.COLORS.CAPTION_500}
                    />
                </TouchableOpacity>

                <CheckCircle
                    size={64}
                    color={THEME.COLORS.SUCCESS}
                    weight='bold'
                />

                <Heading
                    title='Let´s play!'
                    subtitle='Agora é só começas a jogar!'
                    style={{ alignItems: 'center', marginTop: 24 }}
                />

                <Text
                    style={styles.description}
                >
                    Adicione me no discord!
                </Text>

                <TouchableOpacity
                    style={styles.discord}
                    onPress={() => handleCopyDiscord({ discord, onClose, ...rest})}
                    disabled={copied}
                >
                    <Text style={styles.label}>
                        { copied ? <ActivityIndicator color={ THEME.COLORS.PRIMARY }/> : discord }
                    </Text>
                </TouchableOpacity>
                    
            </View>
        </View>
    </Modal>
  );
}