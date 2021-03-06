import React, { useContext, useState, useCallback } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { List, Avatar } from "react-native-paper";
import { SafeArea } from "../../../utils/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { useFocusEffect } from "@react-navigation/native";
import { colors } from "../../../infrastructure/theme/colors";

const TransparentSafeArea = styled(SafeArea)`
  background-color: transparent;
`;

// const SettingsBackground = styled.ImageBackground.attrs({
//   source: require("../../../../assets/food_bg.jpg"),
// })`
//   position: absolute;
//   height: 100%;
//   width: 100%;
// `;

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  margin-top: ${(props) => props.theme.space[5]};
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(
    useCallback(() => {
      getProfilePicture(user);
    }, [user])
  );

  return (
    // <SettingsBackground>
    <TransparentSafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo && (
            <Avatar.Icon
              size={180}
              icon="human"
              backgroundColor={colors.brand.secondary}
            />
          )}
          {photo && (
            <Avatar.Image
              size={180}
              source={{ uri: photo }}
              backgroundColor="#D00101"
            />
          )}
        </TouchableOpacity>
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>

      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color={colors.brand.primary} icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <Spacer position="top" size="small" />
        <SettingsItem
          title="Payment"
          left={(props) => <List.Icon {...props} color={colors.brand.primary} icon="cart" />}
          onPress={() => null}
        />
        <Spacer position="top" size="small" />
        <SettingsItem
          title="Past orders"
          left={(props) => <List.Icon {...props} color={colors.brand.primary} icon="history" />}
          onPress={() => null}
        />
        <Spacer position="top" size="small" />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color={colors.brand.primary} icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </TransparentSafeArea>
    // </SettingsBackground>
  );
};
