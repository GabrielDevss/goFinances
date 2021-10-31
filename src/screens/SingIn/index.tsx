import React, { useState } from 'react';
import { ActivityIndicator, Alert, Platform } from 'react-native';

import { SingInSocialButton } from '../../components/SingInSocialButton';
import { RFValue } from 'react-native-responsive-fontsize';
import { useAuth } from '../../Hooks/auth';
import {
  Container,
  Header,
  TitleWapper,
  Title,
  SingInTitle,
  Footer,
  FooterWapper,
} from './styles';

import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';
import theme from '../../global/styles/theme';


export function SingIn() {
  const { signInWithGoogle, signInWithAplle } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  async function handleSingInWithGoogle() {
    try {
      setIsLoading(true);
      return await signInWithGoogle();

    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível entrar com a conta Google');
      setIsLoading(false);
    }
  }

  async function handleSingInWithAplle() {
    try {
      setIsLoading(true);
      return await signInWithAplle();

    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível entrar com a conta Apple');
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Header>
        <TitleWapper>
          <LogoSvg
            width={RFValue(120)}
            height={RFValue(68)}
          />

          <Title>
            Controle suas
            finanças de forma{'\n'}
            muito simples
          </Title>

          <SingInTitle>
            Faça seu login com{'\n'}
            uma das contas abaixo
          </SingInTitle>

        </TitleWapper>
      </Header>

      <Footer>
        <FooterWapper>
          <SingInSocialButton
            title="Entrar com Google"
            svg={GoogleSvg}
            onPress={handleSingInWithGoogle}
          />

          {
            Platform.OS === 'ios' &&
            <SingInSocialButton
              title="Entrar com Apple"
              svg={AppleSvg}
              onPress={handleSingInWithAplle}
            />
          }

        </FooterWapper>
        {isLoading && <ActivityIndicator
          color={theme.colors.shapes}
          style={{ marginTop: 18 }}
        />}
      </Footer>
    </Container>
  )
}