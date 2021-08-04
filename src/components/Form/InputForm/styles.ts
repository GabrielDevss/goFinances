import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import themes from '../../../global/styles/theme';

export const Container = styled.View`
  width: 100%;
`;

export const Error = styled.Text`
  font-family: ${({ theme }) => themes.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => themes.colors.attention};
  margin-bottom: 7px ;
`;