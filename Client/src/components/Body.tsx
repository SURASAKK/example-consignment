import React, { CSSProperties } from "react"
import styled from "styled-components"
import "../css/Body.css"
import { Route, Switch } from "react-router-dom";
import { Permission } from "./Permission";
import { Product } from "./Product";
import { Addnew } from "./Addnew"

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
      <Switch>
        <Route exact path="/" render={() => {
          return (
            <Permission />
          )
        }} />
        <Route exact path="/product" render={() => {
          return (
            <Product />
          )
        }} />
        <Route exact path="/addnew" render={() => {
          return (
            <Addnew />
          )
        }} />
      </Switch>
    );
  }
}