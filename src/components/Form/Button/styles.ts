import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';
import themes from '../../../global/styles/theme';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  background-color: ${({ theme }) => themes.colors.secondary};
  
  padding: 16px;
  border-radius: 5px;
  margin: 16px 0;

  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => themes.colors.shapes};
  font-family: ${({ theme }) => themes.fonts.bold};
  font-size: ${RFValue(14)}px;
`;
