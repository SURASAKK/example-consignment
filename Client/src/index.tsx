import React, { CSSProperties } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Body } from "./components/Body"
import { Login } from "./components/Login"
import { HeaderShow } from "./components/HeaderShow"
import "semantic-ui-css/semantic.min.css"
import "/css/style.css"
import { HashRouter, BrowserHistory } from "react-router-dom"
import AppStorage from "./share/AppStorage"

type State = {
    loggedIn: boolean
}

export class App extends React.Component<{ style: CSSProperties }, State> {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
        }
    }
    public componentDidMount() {
        this.setState({ loggedIn: AppStorage.getAccessToken() !== null })
    }
    public onLogout = () => {
        this.setState({ loggedIn: false })
        AppStorage.Logout()
    }
    public onLogin = (status) => {
        this.setState({
            loggedIn: status
        })
    }
    public render() {
        let { loggedIn } = this.state

        return (
            this.state.loggedIn ?
                <div>
                    <Header onLogout={this.onLogout} />
                    <Body />
                    <Footer />
                </div>
                :
                <div>
                    <HeaderShow />
                    <Login onLogin={this.onLogin} />
                    <Footer />
                </div>
        )
    }
}

let root = document.getElementById("root")
const app = (
    <HashRouter history={BrowserHistory}>
        <App />
    </HashRouter>
)
ReactDOM.render(app, root)