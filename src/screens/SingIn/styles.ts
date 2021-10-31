import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import themes from '../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 70%;

  background-color: ${({ theme }) => themes.colors.primary};

  align-items: center;
  justify-content: flex-end;
`;

export const TitleWapper = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => themes.fonts.medium};
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => themes.colors.shapes};

  text-align: center;

  margin-top: 45px;
`;

export const SingInTitle = styled.Text`
  font-family: ${({ theme }) => themes.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => themes.colors.shapes};

  text-align: center;

  margin-top: 80px;
  margin-bottom: 67px;
`;

export const Footer = styled.View`
  width: 100%;
  height: 30%;

  background-color: ${({ theme }) => themes.colors.secondary};
`;


export const FooterWapper = styled.View`
  margin-top: ${RFPercentage(-4)}px;

  padding: 0 32px;

  justify-content: space-between;
`;

