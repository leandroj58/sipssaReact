import "./App.css";
import Topbar from "./components/Topbar";
import DashboardBody from "./components/DashboardBody";
import Footer from "./components/Footer";
import NewQuestion from "./components/NewQuestion";


function App() {

	return (
		<div className="App">
			<Topbar />
			<DashboardBody />
			<NewQuestion />
			<Footer
				owner="🌋"
				date="2020"
			/>
		</div>
	);
}

export default App;
