import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { IUser } from './interfaces/IUser';
import UserCard from './UserCard';

interface IAppProps {
    user: IUser,
    navigation: NavigationScreenProp<any, any>
}

const UserForm: React.SFC<IAppProps> = (props) => {
    const user = props.navigation.state.params.user as IUser;
    // tslint:disable-next-line:no-console
    console.log('user from .state.params.user:', user);
    return (
        <View >
            <UserCard {...user} />
        </View>
    )
};

export default UserForm;