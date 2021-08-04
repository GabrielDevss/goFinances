import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import themes from '../../../global/styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TextInput)`
  width: 100%;
  padding: 16px 18px;

  font-family: ${({ theme }) => themes.fonts.regular};
  font-size: ${RFValue(14)}px;

  background-color: ${({ theme }) => themes.colors.shapes};
  border-radius: 5px;

  margin-bottom: 8px;
`;