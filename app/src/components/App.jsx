import "./styles/App.sass";
import "./styles/App.css"
import "../fontawesone";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Layout"
import NewQuestion from "../components/pages/NewQuestion";
import Dashboard from "../components/pages/Dashboard";
import NotFound from "../components/pages/NotFound"

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path='/' component={Dashboard} />
					<Route exact path='/newQuestion' component={NewQuestion} />
					<Route component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
