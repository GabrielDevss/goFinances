import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import themes from '../../global/styles/themes';

interface TransactionProps {
  type: 'positive' | 'negative';
}

export const Container = styled.View`
  margin-bottom: 16px;
  padding: 19px 24px;
  border-radius: 5px;

  background-color: ${({ theme}) => themes.colors.shapes}
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => themes.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => themes.colors.title}
`;

export const Amount = styled.Text<TransactionProps>`
  font-family: ${({ theme }) => themes.fonts.regular};
  font-size: ${RFValue(20)}px;

  margin-top: 2px;

  color: ${({ theme, type }) => 
  type === 'positive' ? themes.colors.success : themes.colors.attention};

`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-top: 19px;
`;

export const Category = styled.View`
  flex-direction: row;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => themes.colors.text};
  
`;

export const CategoryName = styled.Text`
  font-family: ${({ theme }) => themes.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => themes.colors.text};
  margin-left: 17px;
`;

export const Date = styled.Text`
  font-family: ${({ theme }) => themes.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => themes.colors.text}
`;
