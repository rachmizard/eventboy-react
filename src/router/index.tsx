import React, { Suspense } from "react";
import { Switch, Route, RouteProps } from "react-router-dom";

const HomeLazyPage = React.lazy(() => import("./../pages/Home"));
const NotFoundLazyPage = React.lazy(() => import("./../pages/NotFound404"));
const RegisterLazyPage = React.lazy(() => import("./../pages/Register"));

const routes: RouteProps[] = [
	{
		path: "/",
		component: HomeLazyPage,
		exact: true,
	},
	{
		path: "/register",
		component: RegisterLazyPage,
	},
	{
		path: "*",
		component: NotFoundLazyPage,
	},
];

export function RootRouter() {
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<Switch>
				{routes.map((route, i) => (
					<RouteWithSubRoutes key={i} {...route} />
				))}
			</Switch>
		</Suspense>
	);
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route: RouteProps | any) {
	return (
		<Route
			path={route.path}
			render={(props) => (
				// pass the sub-routes down to keep nesting
				<route.component {...props} routes={route.routes} />
			)}
		/>
	);
}
