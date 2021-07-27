import React from "react";
import { Link } from "react-router-dom";
// import DashboardBody from "./components/DashboardBody";

function Dashboard() {
	return (
		<div className="dashboard__container">
			{/* <DashboardBody /> */}
			<Link to="/NewQuestion" className="button is-primary">
				Crea una nueva pregunta re linda...
			</Link>
			
			<Link to="/questionView" className="button is-primary">
				ver pregunta
			</Link>
		</div>
	);
}

export default Dashboard;
