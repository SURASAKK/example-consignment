import React, { CSSProperties } from "react"
import { Menu, Icon, Message, Button } from "semantic-ui-react";
type Props = {
}
type State = {
}
export class Header extends React.Component<Props, State> {
    public onLogout = () => {
    }
    constructor(props) {
        super(props);

        this.state = {
        };
    }
    public render() {
        return (
            <div>
                <Menu inverted color="blue" secondary icon="labeled">
                    <Menu.Item header name="test" />
                </Menu>
            </div>
        )
    }
}