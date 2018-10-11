import React, { CSSProperties } from "react"
import { Button, Form, Grid, Header, Icon, Message, Segment } from "semantic-ui-react"
import { Link } from "react-router-dom";
import AppStorage from "../share/AppStorage"

type Props = {
    // tslint:disable-next-line:variable-name
    onLogin: (boolean) => void
}
type State = {
    User: string,
    Password: string,
    InUser: string,
    InPass: string
}
export class Login extends React.Component<Props, State> {
    public onLogout = () => {
    }
    constructor(props) {
        super(props);

        this.state = {
            User: "admin",
            Password: "admin",
            InUser: "",
            InPass: ""
        };
    }
    public handleUserChange = (e) => {
        this.setState({ InUser: e.target.value })
    }
    public handlePassChange = (e) => {
        this.setState({ InPass: e.target.value })
    }
    public onLogin = () => {
        console.log("On")
        if (this.state.InUser === this.state.User && this.state.InPass === this.state.Password) {
            console.log("Login")

            AppStorage.setAccessToken("OnLogIn")
            this.props.onLogin(true)
        }
    }
    public render() {
        return (
            <div className="login-form">
                {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
                <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>

                <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as="h2" icon>
                            <Icon name="shopping basket" />
                            ระบบฝากขายสหการ
    <Header.Subheader>ระบบที่ทำให้สามารถฝากขายของร้านสหการภายใน 5 นาที!</Header.Subheader>
                        </Header>
                        <Form size="large">
                            <Segment stacked color="green">
                                <Form.Input fluid icon="user" iconPosition="left" placeholder="ชื่อผู้ใช้งาน" onChange={this.handleUserChange} autofocus />
                                <Form.Input
                                    fluid
                                    icon="lock"
                                    iconPosition="left"
                                    placeholder="รหัสผ่าน"
                                    type="password"
                                    onChange={this.handlePassChange}
                                />
                                <Button color="teal" fluid size="large" onClick={this.onLogin}>
                                    เข้าสู่ระบบ
            </Button>
                            </Segment>
                        </Form>
                        <Message>
                            ยังไม่มีไอดีผู้ใช้งาน? <a href="#">สมัครสมาชิก</a>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}