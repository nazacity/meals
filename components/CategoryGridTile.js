import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';

const CategoryGridTile = ({ item, navigation }) => {
  let TochuableComponent = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TochuableComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TochuableComponent
        style={{ flex: 1 }}
        onPress={() => {
          navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: item.id,
            },
          });
        }}
      >
        <View
          style={{ ...styles.contianer, ...{ backgroundColor: item.color } }}
        >
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
        </View>
      </TochuableComponent>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
    elevation: 3,
  },
  contianer: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'right',
  },
});
