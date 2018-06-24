import * as React from 'react';
import { FlatList, ListRenderItemInfo, Text, View } from 'react-native';
import { IUser } from './interfaces/IUser';
import UserCard from './UserCard';



export interface IUserListProps {
    title?: string
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

    public renderItem = (user: ListRenderItemInfo<IUser>) => {
        return (
            <UserCard {...user.item} />
        )
    }

    public keyExtractor = (user: IUser) => {
        return user.id.toString()
    }

    public render() {
        return (
            <View>
                <FlatList
                    data={this.state.users}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                />

            </View>
        );
    }
}
