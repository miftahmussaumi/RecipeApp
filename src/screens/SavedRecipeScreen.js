import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SavedRecipeScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Saved Recipe Screen 🔖</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default SavedRecipeScreen;