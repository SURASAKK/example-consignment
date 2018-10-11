import React, { CSSProperties } from "react"
import styled from "styled-components"
import { getApiUrl } from "../share/Configuration";
import { Segment, Checkbox, Form, Input, Button, Icon, Label } from "semantic-ui-react";
import "../css/Body.css"
import ImageUploader from "react-images-upload";

const ContainerDiv = styled.div`
    display: block;
    flex-direction: column;
`

type Props = {
}

type State = {
    pictures: any[]
}

export class Addnew extends React.Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {
            pictures: []
        }
    }
    private onDrop = (picture) => {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    public render() {
        return (
            <ContainerDiv style={{ padding: "20px", alignSelf: "center", minWidth: "1000px", flex: 1 }}>
                <Segment.Group compact style={{ width: "100%", alignSelf: "center" }}>
                    <Segment inverted color="yellow" >เพิ่มสินค้าใหม่</Segment>
                    <Segment>
                        <Form.Field>
                            <label>รหัสสินค้า</label><br />
                            <Input disabled placeholder="รหัสสินค้า" value="7" style={{ width: "100%" }} />
                        </Form.Field>
                        <Form.Field>
                            <label>ชื่อสินค้า</label><br />
                            <Input placeholder="ชื่อสินค้า" style={{ width: "100%" }} />
                        </Form.Field>
                        <Form.Field>
                            <label>ราคา</label><br />
                            <Input labelPosition="right" type="text" placeholder="ราคา">
                                <Label basic>฿</Label>
                                <input />
                                <Label>.00</Label>
                            </Input>
                        </Form.Field>
                        <Form.Field>
                            <label>จำนวน</label><br />
                            <Input placeholder="จำนวน" style={{ width: "100%" }} />
                        </Form.Field>
                        <Form.Field>
                            <label>รูปภาพ</label><br />
                            <ImageUploader
                                withIcon={true}
                                buttonText="Choose images"
                                onChange={this.onDrop}
                                imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                                maxFileSize={5242880}
                            />
                        </Form.Field>
                        <Button color="green" floated="right" icon labelPosition="left" >
                            <Icon name="save" />
                            บันทึก
                            </Button>
                        <Button color="red" icon floated="right" labelPosition="left">
                            <Icon name="cancel" />
                            ยกเลิก
                            </Button>
                    </Segment>
                </Segment.Group>
            </ContainerDiv>
        );
    }
}