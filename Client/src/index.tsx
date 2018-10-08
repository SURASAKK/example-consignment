import React, { CSSProperties } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import "semantic-ui-css/semantic.min.css"

type State = {

}

export class App extends React.Component<{ style: CSSProperties }, State> {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    public render() {
        return (
            <div>Hello world</div>
        )
    }
}

let root = document.getElementById("root")
ReactDOM.render(<App />, root)