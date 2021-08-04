import React from 'react';
import { Alert } from 'react-native';

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
  FooterWapper
} from './styles';

import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';


export function SingIn() {
  const { singInWithGoogle } = useAuth();

  async function handleSingInWithGoogle() {
    try {
      await singInWithGoogle();

    }catch (error) {
      console.log(error);
      Alert.alert('Não foi possível entrar com a conta Google')
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

          <SingInSocialButton
            title="Entrar com Apple"
            svg={AppleSvg}
          />  
        </FooterWapper>
      </Footer>
    </Container>
  )
}