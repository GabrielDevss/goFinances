import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import themes from '../../global/styles/themes';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => themes.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;

  align-items: center;
  justify-content: flex-end;

  background-color: ${({ theme }) => themes.colors.primary}
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => themes.fonts.regular};
  font-size: ${RFValue(18)}px;

  color: ${({ theme }) => themes.colors.shapes};
  margin-bottom: 19px;
`;

export const Form = styled.View`
  flex: 1;
  
  padding: 24px;
  justify-content: space-between;
`;
 
export const Fields = styled.View``;

export const TransactionsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px ;
`;
