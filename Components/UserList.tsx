import * as React from 'react';
import { FlatList, ListRenderItemInfo, Text, TouchableHighlight, View } from 'react-native';
import ActionButton from 'react-native-action-button';
import { NavigationScreenProp, StackNavigator } from 'react-navigation';
import { IUser } from './interfaces/IUser';
import UserCard from './UserCard';



export interface IUserListProps {
    title?: string,
    navigation: NavigationScreenProp<any, any>
}
export interface IEventListState {
    users: IUser[];
}

export default class UserList extends React.Component<IUserListProps, IEventListState> {
    public static defaultProps = {
        title: 'Hello Events list!'
    }

    constructor(props: IUserListProps) {
        super(props);
        this.state = {
            users: []
        };
    }

    public componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((users: IUser[]) => {
                this.setState({
                    users
                });
            })
    }

    public onPress = (user: IUser): any => {
        const that = this;
        return (event: any) => {
            that.props.navigation.navigate('userForm', { user })
        }
    }

    public renderItem = (user: ListRenderItemInfo<IUser>) => {
        return (
            <TouchableHighlight onPress={this.onPress(user.item)}>
                <UserCard {...user.item} />
            </TouchableHighlight>
        )
    }

    public keyExtractor = (user: IUser) => {
        return user.id.toString()
    }

    public onNewUserPress = () => {
        this.props.navigation.navigate('userNewForm', {});
    }

    public render() {
        return (
            <View>
                <FlatList
                    data={this.state.users}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                />

                <ActionButton
                    buttonColor="rgba(231,76,60,1)"
                    onPress={this.onNewUserPress}
                />

            </View>
        );
    }
}
