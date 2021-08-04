import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import themes from '../../global/styles/theme';

interface ContainerProps {
  color: string;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  background-color: ${({ theme }) => themes.colors.shapes};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  border-radius: 5px;
  border-left-width: 5px;
  border-left-color: ${({ color }) => color};

  padding: 12px 24px;
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => themes.fonts.regular};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => themes.colors.title}
`;

export const Amount = styled.Text`
  font-family: ${({ theme }) => themes.fonts.bold};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => themes.colors.title}
`;
