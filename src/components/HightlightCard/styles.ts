import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import themes from '../../global/styles/themes';

interface TypeProps {
  type: 'up' | 'down' | 'total';
}

export const Container = styled.View<TypeProps>`
  width: ${RFValue(300)}px;
  border-radius: 5px;

  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: 16px;

  background-color: ${({ theme, type }) => 
  type === 'total' ? themes.colors.secondary : themes.colors.shapes }
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
  font-family: ${({ theme }) => themes.fonts.medium};
  font-size: ${RFValue(14)}px;

  color: ${({ theme, type }) => 
  type === 'total' ? themes.colors.shapes : themes.colors.title };
`;

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;

  ${({ type }) => type === 'up' && css`
    color: ${({ theme }) => themes.colors.success};
  `};

  ${({ type }) => type === 'down' && css`
  color: ${({ theme }) => themes.colors.attention};
  `};

  ${({ type }) => type === 'total' && css`
  color: ${({ theme }) => themes.colors.shapes};
  `};

`;

export const Footer = styled.View``;

export const Amount = styled.Text<TypeProps>`
  font-family: ${({ theme }) => themes.fonts.medium};
  font-size: ${RFValue(32)}px;

  color: ${({ theme, type }) => 
  type === 'total' ? themes.colors.shapes : themes.colors.title };

  margin-top: 38px;
`;

export const LastTransaction = styled.Text<TypeProps>`
  font-family: ${({ theme }) => themes.fonts.regular};
  font-size: ${RFValue(12)}px;

  color: ${({ theme, type }) => 
  type === 'total' ? themes.colors.shapes : themes.colors.text };
`;

