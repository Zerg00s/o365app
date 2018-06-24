import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IUser } from './interfaces/IUser';

const styles = StyleSheet.create({
    propertyCard: {
        backgroundColor: 'white',
        padding: 10
    },
    userCard: {
        padding: 10
    },
    userEmail: {
        color: '#bdbdbd',

    },

    userName: {
        fontSize: 18,
        fontWeight: '300',
    },

});
export default function UserCard(user: IUser) {
    return (
        <View style={styles.userCard}>
            <View style={styles.propertyCard}>
                <Text style={styles.userName}>{user.name}</Text>
            </View>
            <View style={styles.propertyCard}>
                <Text style={styles.userEmail}>tel: {user.phone}</Text>
            </View>
            <View style={styles.propertyCard}>
                <Text style={styles.userEmail}>{user.email}</Text>
            </View>
        </View>

    );
}