import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from "@expo/vector-icons";
import { FlatList } from 'react-native'; 

import themes from "../../global/styles/themes";
import styled from "styled-components/native";

import { DataListProps } from '.';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => themes.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;

  align-items: center;

  background-color: ${({ theme }) => themes.colors.primary};
`;

export const UserWapper = styled.View`
  width: 100%;

  padding: 0 24px;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(55)}px;
  height: ${RFValue(55)}px;

  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  font-family: ${({ theme }) => themes.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => themes.colors.shapes};
`;

export const UserName = styled.Text`
  font-family: ${({ theme }) => themes.fonts.bold};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => themes.colors.shapes};
  
`;

export const LogoutButton = styled(BorderlessButton)``;

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => themes.colors.secondary};
`;

export const HightlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
})`
  width: 100%;

  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`;

export const Transactions = styled.View`
  flex: 1;
  padding: 0 24px;

  margin-top: ${RFPercentage(12)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => themes.fonts.regular};
  margin-bottom: 16px;
`;

export const TransactinList = styled(
  FlatList as new () => FlatList<DataListProps>
  ).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { 
    paddingBottom: getBottomSpace()
  }
})`
  
`;
