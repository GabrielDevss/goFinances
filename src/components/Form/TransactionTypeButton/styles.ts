import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import themes from '../../../global/styles/themes';

interface TypeProps {
  type: 'up' | 'down';
}

interface ContainerProps {
  isActive: boolean;
  type: 'up' | 'down';
}

export const Container = styled.View<ContainerProps>`
  width: 48%;

  border-width: ${({ isActive}) => isActive ? 0 : 1}px;
  border-style: solid;
  border-color:  ${({ theme }) => themes.colors.text};
  border-radius: 5px;

  ${({ isActive, type}) => isActive && type === 'up' && css`
    background-color: ${({ theme }) => themes.colors.success_light};
  `};

  ${({ isActive, type}) => isActive && type === 'down' && css`
    background-color: ${({ theme }) => themes.colors.attention_light};
  `}

`;

export const Button = styled(RectButton)`
  flex-direction: row;
  align-items: center;

  padding: 16px;
`;

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;

  color: ${({ theme, type }) => 
  type === 'up' ? themes.colors.success : themes.colors.attention };

`;

export const Title = styled.Text`
  font-family: ${({ theme }) => themes.fonts.regular};
  font-size: ${RFValue(14)}px;
`;
