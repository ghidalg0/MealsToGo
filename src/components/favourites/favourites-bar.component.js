import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../spacer/spacer.component";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;
export const FavouritesBar = ({ favourites }) => (
  <FavouritesWrapper>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {favourites.map((restaurant) => {
        const key = restaurant.name.split(" ").join("");
        return (
          <Spacer key={key} position="left" size="medium">
            <CompactRestaurantInfo restaurant={restaurant} />
          </Spacer>
        );
      })}
    </ScrollView>
  </FavouritesWrapper>
);
