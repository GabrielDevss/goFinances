import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import  themes  from '../../global/styles/theme';

export const Container = styled(RectButton)`
  width: 100%;
  height: 56px;

  border-radius: 5px;

  flex-direction: row;
  align-items: center;

  background-color: ${({ theme }) => themes.colors.background};

  margin-bottom: 16px;
`;

export const ImageContainer = styled.View`
  padding: 24px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => themes.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => themes.colors.title};

  margin-left: 16px;
`;

