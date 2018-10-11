import React, { CSSProperties } from "react"
import { Menu, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

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
                <Menu inverted secondary color="blue" icon="labeled">
                    <Menu.Item header name="ระบบฝากขายสหการ" />
                    <Link to="/"><Menu.Item name="การอนุมัติสินค้า" onClick={null} /></Link>
                    <Link to="/product"><Menu.Item name="รายการสินค้า" onClick={null} /></Link>
                    <Link to="/addnew"><Menu.Item name="เพิ่มสินค้า" onClick={null} /></Link>
                    <Dropdown item text="สรุปยอด">
                        <Dropdown.Menu>
                            <Dropdown.Item>รายวัน</Dropdown.Item>
                            <Dropdown.Item>รายเดือน</Dropdown.Item>
                            <Dropdown.Item>รายสินค้า</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Item position="right" name="ออกจากระบบ" />
                </Menu>
            </div>
        )
    }
}