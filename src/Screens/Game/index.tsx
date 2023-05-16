import { TouchableOpacity, View, Image, FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { Background } from '../../components/Background';
import { GameParams } from '../../@types/navigation';
import { Entypo } from '@expo/vector-icons'
import { THEME } from '../../theme';
import { Heading } from '../../components/Heading';
import { useEffect, useState } from 'react';


import logoImg from '../../assets/logo-nlw-esports.png'
import { AdCard, AdCardProps } from '../../components/AdCard';
import { AdMatch } from '../../components/AdMatch';

export function Game() {

  const route = useRoute();
  const game = route.params as GameParams;
  const navigation = useNavigation();
  function handleGoBack() {
    navigation.goBack();
  }

  const [ad, setAd] = useState<AdCardProps[]>([]);
  const [discordMatch, setDiscordMatch] = useState<string>('');

  useEffect(() => {
    fetch (`http://192.168.18.75:3333/ads/${game.id}/games`)
    .then(response => response.json())
    .then(data => {
      setAd(data)
    })
  }, []);

  async function handleConnect(adId: string) {
    await fetch (`http://192.168.18.75:3333/ads/${adId}/discord`)
    .then(response => response.json())
    .then(data => {
      setDiscordMatch(data.discord)
    })
  }


  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo name="chevron-thin-left" size={20} color={THEME.COLORS.CAPTION_300} />
            
          </TouchableOpacity>

          <Image source={logoImg} style={styles.logo}/>

          <View style={styles.headerVoid}/>
        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.banner}
          resizeMode="cover"
        />

        <Heading
          title={game.name}
          subtitle="Conecte-se e comece a jogar!"
        />

        <FlatList
          data={ad}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <AdCard data={item} onConnect={() => handleConnect(item.id)}/>
          )}
          horizontal

          style={styles.containerList}
          contentContainerStyle={[styles.contentList, ad.length === 0 && styles.emptyContent]}
          showsHorizontalScrollIndicator={false}

          ListEmptyComponent={() => (
            <Text style={styles.emptyText}>
              Nenhum anúncio encontrado!
            </Text>
          )}
        />


        <AdMatch
          visible={discordMatch.length > 0 ? true: false}
          discord={discordMatch}
          onClose={() => { setDiscordMatch('')}}
        />

      </SafeAreaView>
    </Background>
    
  );
}