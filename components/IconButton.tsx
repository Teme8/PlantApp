import React, { PropsWithChildren } from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, View } from 'react-native';

export function IconButton({ title, onPress }: PropsWithChildren & {title: String, onPress: (event: GestureResponderEvent) => void}) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 80,
        height: 50, 
        backgroundColor: 'blue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    },
    text: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
});