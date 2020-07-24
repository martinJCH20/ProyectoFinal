import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles =  StyleSheet.create({
    container: {
        marginTop: 20
    }
})

const Label = ({children, label, labelStyle}) => {
    return(
        <View style={styles.container}>
            <Text style={labelStyle}>{label}</Text>
            {children}
        </View>
    );
}

export default Label;