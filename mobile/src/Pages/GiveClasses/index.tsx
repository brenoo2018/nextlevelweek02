import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles'; 

import giveClassesBgImage from '../../assets/images/give-classes-background.png';
import { RectButton } from 'react-native-gesture-handler';

const GiveClasses: React.FC = () => {

  const navigation = useNavigation();

  function handleBackToLanding(){
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <ImageBackground 
        resizeMode="contain" 
        source={giveClassesBgImage} 
        style={styles.content}
      >

        <Text style={styles.title}>Quer ser um proffy ?</Text>
        <Text style={styles.description}>Para começar, você precisa se cadastrar como professor na nossa plataforma web.</Text>

      </ImageBackground>

      <RectButton
        onPress={handleBackToLanding}
        style={styles.okButton}
      >
        <Text style={styles.okButtonText}>Tudo Bem</Text>
      </RectButton>
    </View>
  )
}

export default GiveClasses;