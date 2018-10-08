import React, { CSSProperties } from "react"
import styled from "styled-components"
import { getApiUrl } from "../share/Configuration";
import { Segment, Form, Checkbox, Button } from "semantic-ui-react";
import "../css/Body.css"

const ContainerDiv = styled.div`
    display: block;
    flex-direction: column;
`

type Props = {
}

type State = {
}

export class Body extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  public render() {
    return (
      <ContainerDiv style={{ padding: "20px", alignSelf: "center", minWidth: "1000px", flex: 1 }}>

        <Segment.Group compact style={{ width: "100%", alignSelf: "center" }}>
          <Segment inverted color="blue" >Form Test</Segment>
          <Segment>
            <Form>
              <Form.Field>
                <label>First Name</label>
                <input placeholder="First Name" />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input placeholder="Last Name" />
              </Form.Field>
              <Form.Field>
                <Checkbox label="I agree to the Terms and Conditions" />
              </Form.Field>
              <Button type="submit">Submit</Button>
            </Form>
          </Segment>
        </Segment.Group>
      </ContainerDiv>
    );
  }
}