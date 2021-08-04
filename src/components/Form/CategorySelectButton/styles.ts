import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

import styled from 'styled-components/native';
import themes from '../../../global/styles/theme';

export const Container = styled(RectButton).attrs({
  activeOpacity: 0.7
})`
  background-color: ${({ theme }) => themes.colors.shapes};
  width: 100%;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  border-radius: 5px;

  padding: 18px;
  margin-top: 16px;
`;

export const Category = styled.Text`
  font-family: ${({ theme }) => themes.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => themes.colors.text}
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => themes.colors.text}
`;
