import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';

const ListItem = ({ placeName }) => {
    return (
        <View style={styles.listItem}>
            <Text>
                { placeName }
            </Text>
        </View>
    );	
};

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        backgroundColor: "#eee",
        marginBottom: 10
    }
});

export default ListItem;