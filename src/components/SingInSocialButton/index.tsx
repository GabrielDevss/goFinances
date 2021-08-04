import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';
import {
 Container,
 ImageContainer,
 Title,
 } from './styles';

interface ButtonProps extends RectButtonProps {
  title: string;
  svg: React.FC<SvgProps>;
}

export function SingInSocialButton({ 
  title,
  svg: Svg,
  ...rest
}: ButtonProps) {
  return(
      <Container {...rest}>
         <ImageContainer>
            <Svg />  
         </ImageContainer> 

         <Title>{title}</Title>
      </Container>
    )
}