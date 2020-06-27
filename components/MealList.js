import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import MealItem from './MealItem';

const MealList = (props) => {
  // const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);
  const renderMealItem = (itemData) => {
    // const isFavorite = favoriteMeals.some(
    //   (meal) => meal.id === itemData.item.id
    // );

    return (
      <MealItem
        item={itemData.item}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
            },
          });
        }}
      />
    );
  };
  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: '100%', padding: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});

export default MealList;
