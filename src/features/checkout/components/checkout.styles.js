import styled from "styled-components/native";
import { Avatar, TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";

export const CartIconContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const CartIcon = styled(Avatar.Icon).attrs({
  backgroundColor: colors.brand.primary,
  size: 128,
})``;

export const NameInput = styled(TextInput)`
  margin: ${(props) => props.theme.space[3]};
`;
