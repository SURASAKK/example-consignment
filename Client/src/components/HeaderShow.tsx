import React, { CSSProperties } from "react"
import { Menu, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

type Props = {
}
type State = {
}
export class HeaderShow extends React.Component<Props, State> {
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
                <Menu inverted secondary color="blue" icon="labeled">
                    <Menu.Item header name="ระบบฝากขายสหการ" />
                </Menu>
            </div>
        )
    }
}