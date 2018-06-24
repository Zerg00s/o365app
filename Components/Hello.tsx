// components/Hello.tsx
import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"

// tslint:disable-next-line:interface-name
export interface Props {
    name: string
    enthusiasmLevel?: number
    onIncrement?: () => void
    onFetchData?: () => void
}

// tslint:disable-next-line:interface-name
interface State {
    enthusiasmLevel: number,
    data?: any;
}

export class Hello extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        if ((props.enthusiasmLevel || 0) <= 0) {
            throw new Error("You could be a little more enthusiastic. :D")
        }

        this.state = {
            data: "<empty>",
            enthusiasmLevel: props.enthusiasmLevel || 1,
        }
    }

    public onIncrement = () => this.setState({ enthusiasmLevel: this.state.enthusiasmLevel + 1 });
    public onFetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(json => {

                // tslint:disable-next-line:no-console
                console.log(json);
                this.setState({
                    data: json
                });
            })

    }
    public getExclamationMarks = (numChars: number) => Array(numChars + 1).join("!")

    public render() {
        return (
            <View style={styles.root}>
                <Text style={styles.greeting}>
                    results: {this.state.data.title}
                </Text>

                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <Button
                            title="Get data now"
                            onPress={this.onFetchData}
                            accessibilityLabel="decrement"
                            color="red"
                        />
                    </View>

                </View>
            </View>
        )
    }
}

// styles

const styles = StyleSheet.create({
    button: {
        flex: 1,
        paddingVertical: 0
    },
    buttons: {
        alignItems: "stretch",
        alignSelf: "center",
        borderWidth: 5,
        flexDirection: "row",
        minHeight: 70,
    },
    greeting: {
        color: "#999",
        fontWeight: "bold"
    },
    root: {
        alignItems: "center",
        alignSelf: "center"
    },
})