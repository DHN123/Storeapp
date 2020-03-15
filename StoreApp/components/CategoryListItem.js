import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';
import Skii from '../assets/ski.png';

export default function CategoryListItem(props) {
    return(
        <View style={ styles.container }>
            <Text style={ styles.title }>
                CategoryListItem
            </Text>
            <Image source={Skii} style={ styles.categoryItem }/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        marginBottom: 16
    },
    categoryItem: {
        width: 64,
        height : 64,
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    }
})