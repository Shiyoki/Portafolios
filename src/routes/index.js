import Home from "../view/Home"
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom"
export default function Routes(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
            </Switch>
        </HashRouter>
    );
}