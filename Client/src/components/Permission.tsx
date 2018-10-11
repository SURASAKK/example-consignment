import React, { CSSProperties } from "react"
import styled from "styled-components"
import { getApiUrl } from "../share/Configuration";
import { Segment, Button, Icon, Table } from "semantic-ui-react";
import "../css/Body.css"

const ContainerDiv = styled.div`
    display: block;
    flex-direction: column;
`

type Props = {
}

type State = {
}

export class Permission extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  public render() {
    return (
      <ContainerDiv style={{ padding: "20px", alignSelf: "center", minWidth: "1000px", flex: 1 }}>
        <Segment.Group compact style={{ width: "100%", alignSelf: "center" }}>
          <Segment inverted color="blue" >สินค้ารออนุมัติ</Segment>
          <Segment>
            <Table striped>
              <Table.Header>
                <Table.Row textAlign="center">
                  <Table.HeaderCell>รหัสสินค้า</Table.HeaderCell>
                  <Table.HeaderCell>ชื่อสินค้า</Table.HeaderCell>
                  <Table.HeaderCell>จำนวน</Table.HeaderCell>
                  <Table.HeaderCell>ผู้ฝาก</Table.HeaderCell>
                  <Table.HeaderCell>การอนุมัติ</Table.HeaderCell>
                  <Table.HeaderCell>แก้ไข</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>1</Table.Cell>
                  <Table.Cell>ขนมไหว้พระจันทร์</Table.Cell>
                  <Table.Cell>20</Table.Cell>
                  <Table.Cell>มานพเอง</Table.Cell>
                  <Table.Cell textAlign="center"><Icon loading name="spinner" /> รอการอนุมัติ </Table.Cell>
                  <Table.Cell textAlign="center"><Button.Group size="large">
                    <Button positive>อนุมัติ</Button>
                    <Button.Or />
                    <Button negative>ไม่อนุมัติ</Button>
                  </Button.Group></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>2</Table.Cell>
                  <Table.Cell>เครฟเย็น</Table.Cell>
                  <Table.Cell>10</Table.Cell>
                  <Table.Cell>ขมูขีจัง</Table.Cell>
                  <Table.Cell textAlign="center"><Icon loading name="spinner" /> รอการอนุมัติ </Table.Cell>
                  <Table.Cell textAlign="center"><Button.Group size="large">
                    <Button positive>อนุมัติ</Button>
                    <Button.Or />
                    <Button negative>ไม่อนุมัติ</Button>
                  </Button.Group></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>3</Table.Cell>
                  <Table.Cell>ผัดไทย</Table.Cell>
                  <Table.Cell>20</Table.Cell>
                  <Table.Cell>ป้าฝอย</Table.Cell>
                  <Table.Cell textAlign="center"><Icon loading name="spinner" /> รอการอนุมัติ </Table.Cell>
                  <Table.Cell textAlign="center"><Button.Group size="large">
                    <Button positive>อนุมัติ</Button>
                    <Button.Or />
                    <Button negative>ไม่อนุมัติ</Button>
                  </Button.Group></Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Segment>
        </Segment.Group>
      </ContainerDiv>
    );
  }
}