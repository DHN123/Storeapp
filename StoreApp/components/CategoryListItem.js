import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,

} from 'react-native';
import Skii from '../assets/ski.png';

export default function CategoryListItem(props) {
    const { category, onPress } = props;
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={onPress}
        >
            <View style={styles.container}>
                <Text style={styles.title}>
                    {category.name}
                </Text>
                <Image source={Skii} style={styles.categoryItem} />
            </View>
        </TouchableOpacity>

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
        height: 64,
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    }
})