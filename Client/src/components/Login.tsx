import React, { CSSProperties } from "react"
import { Button, Form, Grid, Header, Icon, Message, Segment, Modal, Input, Radio } from "semantic-ui-react"
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
    register: boolean
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
            InPass: "",
            register: false
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
    private showRegister = () => {
        this.setState({ register: true })
    }
    private registerClose = () => {
        this.setState({ register: false })
    }
    public render() {
        let style = {
            marginLeft: "10px",
            marginRight: "10px"
        }
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
                                <Form.Input fluid icon="user" iconPosition="left" placeholder="ชื่อผู้ใช้งาน" onChange={this.handleUserChange} focus />
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
                            ยังไม่มีไอดีผู้ใช้งาน? <a href="#" onClick={this.showRegister}>สมัครสมาชิก</a>
                        </Message>
                    </Grid.Column>
                </Grid>
                <Modal
                    open={this.state.register}
                    closeOnEscape={true}
                    closeOnDimmerClick={true}
                    onClose={this.registerClose}
                >
                    <Modal.Header>สมัครสมาชิก</Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Field>
                                <Icon style={style} size="large" name="user" />
                                Username :&nbsp;<br /><br /><Input placeholder="User Here..." width={1} />
                            </Form.Field>

                            <Form.Field>
                                <Icon style={style} size="large" name="user" />
                                ชื่อ-นามสกุล :&nbsp;<br /><br /><Input placeholder="Name Surname Here..." width={1} />
                            </Form.Field>
                            <Form.Field>
                                <Icon style={style} size="large" name="transgender" />
                                เพศ :&nbsp;<br /><br /><Radio
                                    label="ชาย"
                                    name="radioGroup"
                                />&nbsp;
                                <Radio
                                    label="หญิง"
                                    name="radioGroup"
                                />
                            </Form.Field>
                            <Form.Field>
                                <Icon style={style} size="large" name="home" />
                                ที่อยู่ :&nbsp;<br /><br /><Input placeholder="address Here..." width={1} />
                            </Form.Field>
                            <Form.Field>
                                <Icon style={style} size="large" name="phone" />
                                เบอร์โทรศัพท์ :&nbsp;<br /><br /><Input placeholder="Phone Number Here..." width={1} />
                            </Form.Field>
                            <Form.Field>
                                <Icon style={style} size="large" name="mail" />
                                อีเมล์ :&nbsp;<br /><br /><Input placeholder="Email Here..." width={1} />
                            </Form.Field>
                            <Form.Field>
                                <Icon style={style} size="large" name="key" />
                                Password :&nbsp;<br /><br /><Input placeholder="Password..." type="password" width={1} />
                            </Form.Field>    <Form.Field>
                                <Icon style={style} size="large" name="key" />
                                Confirm Password :&nbsp;<br /><br /><Input placeholder="Confirm Password..." type="password" width={1} />
                            </Form.Field>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color="green" floated="right" icon labelPosition="left" >
                            <Icon name="save" />
                            บันทึก
                            </Button>
                        <Button color="red" icon labelPosition="left" >
                            <Icon name="cancel" />
                            ยกเลิก
                            </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}