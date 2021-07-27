import "./styles/main.scss";
import "../fontawesone";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Layout"
import NewQuestion from "../components/pages/NewQuestion";
import QuestionPreview from "./pages/QuestionPreview";
import Dashboard from "../components/pages/Dashboard";
import NotFound from "../components/pages/NotFound"

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path='/' component={Dashboard} /> 
					<Route exact path='/newQuestion' component={NewQuestion} />
					<Route exact path='/questionView' component={QuestionPreview} />
					<Route component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
