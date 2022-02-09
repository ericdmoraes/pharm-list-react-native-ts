import styled from 'styled-components/native';
import { colors, sizes } from '../../styles/global';

export const Container = styled.View`
  background-color: ${colors.highlight};
  padding: ${sizes.padding};
  height: 80%;
  width: 100%;
  padding: 12px;
  margin-top: 20%;
  align-items: center;
  justify-content: center;
  justify-self: flex-end;
`;

export const Label = styled.Text`
  font-size: ${sizes.bigTitle};
  font-weight: bold;
  color: ${colors.tertiary};
`;
