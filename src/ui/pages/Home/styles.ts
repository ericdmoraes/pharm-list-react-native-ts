import styled from 'styled-components/native';
import { colors, sizes } from '../../styles/global';

export const Container = styled.View`
  background-color: ${colors.background};
  padding: ${sizes.padding};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  font-size: ${sizes.bigTitle};
  font-weight: bold;
  color: ${colors.tertiary};
`;
