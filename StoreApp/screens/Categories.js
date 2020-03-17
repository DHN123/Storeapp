import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import CategoryListItem from '../components/CategoryListItem';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: 1, name: 'Dụng cụ trượt tuyết' },
        { id: 2, name: 'Quần áo thể thao' },
        { id: 3, name: 'Kính mũ' },
      ]
    }
  }

  render() {
    const { navigation } = this.props;
    const { categories } = this.state;
    return (
      <View>
          <FlatList data={categories}
            renderItem={({ item  }) => 
            <CategoryListItem 
                category={item} 
                onPress={() => navigation.navigate('Category')}
            />}
            keyExtractor={ item => `${item.id}`}
            contentContainerStyle={styles.container}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16
  },
});
