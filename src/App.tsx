import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";

export default function App(): JSX.Element {
	return (
		<div className="App">
			<HashRouter basename="/">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
			</HashRouter>
		</div>
	);
}
