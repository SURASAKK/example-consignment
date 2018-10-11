import React, { CSSProperties } from "react"
import styled from "styled-components"
import { getApiUrl } from "../share/Configuration";
import { Segment, Button, Icon, Table } from "semantic-ui-react";
import "../css/Body.css"
import moment, { Moment } from "moment"

const ContainerDiv = styled.div`
    display: block;
    flex-direction: column;
`

type Props = {
}

type State = {
}

export class Product extends React.Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    public render() {
        return (
            <ContainerDiv style={{ padding: "20px", alignSelf: "center", minWidth: "1000px", flex: 1 }}>
                <Segment.Group compact style={{ width: "100%", alignSelf: "center" }}>
                    <Segment inverted color="green" >รายการสินค้า</Segment>
                    <Segment>
                        <Table striped>
                            <Table.Header>
                                <Table.Row textAlign="center">
                                    <Table.HeaderCell>รหัสสินค้า</Table.HeaderCell>
                                    <Table.HeaderCell>ชื่อสินค้า</Table.HeaderCell>
                                    <Table.HeaderCell>จำนวน</Table.HeaderCell>
                                    <Table.HeaderCell>ผู้ฝาก</Table.HeaderCell>
                                    <Table.HeaderCell>ราคาต่อชิ้น</Table.HeaderCell>
                                    <Table.HeaderCell>ราคารวม</Table.HeaderCell>
                                    <Table.HeaderCell>วันที่อนุมัติ</Table.HeaderCell>
                                    <Table.HeaderCell>แก้ไข</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>4</Table.Cell>
                                    <Table.Cell>ถั่วตัด</Table.Cell>
                                    <Table.Cell>30</Table.Cell>
                                    <Table.Cell>มานา</Table.Cell>
                                    <Table.Cell>10.00</Table.Cell>
                                    <Table.Cell>300.00</Table.Cell>
                                    <Table.Cell textAlign="center">{moment().format("lll")}</Table.Cell>
                                    <Table.Cell textAlign="center">
                                        <Button circular icon="pencil" color="green" onClick={null} />
                                        <Button circular icon="trash alternate" color="red" onClick={null} />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>5</Table.Cell>
                                    <Table.Cell>เยลลี่</Table.Cell>
                                    <Table.Cell>10</Table.Cell>
                                    <Table.Cell>แอม</Table.Cell>
                                    <Table.Cell>10.00</Table.Cell>
                                    <Table.Cell>100.00</Table.Cell>
                                    <Table.Cell textAlign="center">{moment().format("lll")}</Table.Cell>
                                    <Table.Cell textAlign="center">
                                        <Button circular icon="pencil" color="green" onClick={null} />
                                        <Button circular icon="trash alternate" color="red" onClick={null} />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>6</Table.Cell>
                                    <Table.Cell>หมูอบ</Table.Cell>
                                    <Table.Cell>20</Table.Cell>
                                    <Table.Cell>กร</Table.Cell>
                                    <Table.Cell>20.00</Table.Cell>
                                    <Table.Cell>400.00</Table.Cell>
                                    <Table.Cell textAlign="center">{moment().format("lll")}</Table.Cell>
                                    <Table.Cell textAlign="center">
                                        <Button circular icon="pencil" color="green" onClick={null} />
                                        <Button circular icon="trash alternate" color="red" onClick={null} />
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Segment>
                </Segment.Group>
            </ContainerDiv>
        );
    }
}