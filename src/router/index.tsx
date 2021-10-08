import React, { Suspense } from "react";
import { Redirect, Route, RouteProps, Switch } from "react-router-dom";
import { checkAuth } from "utils/roles";

const HomeLazyPage = React.lazy(() => import("./../pages/Home"));
const NotFoundLazyPage = React.lazy(() => import("./../pages/NotFound404"));
const RegisterLazyPage = React.lazy(() => import("./../pages/Register"));
const DetailEventLazyPage = React.lazy(() => import("./../pages/DetailEvent"));

const routes: RouteProps[] | any[] = [
    {
        path: "/",
        component: HomeLazyPage,
        exact: true,
        roles: ["*"],
    },
    {
        path: "/register",
        component: RegisterLazyPage,
        roles: ["*", "guest"],
    },
    {
        path: "/event/:id",
        component: DetailEventLazyPage,
        roles: ["user"],
    },
    {
        path: "*",
        component: NotFoundLazyPage,
        roles: ["*"],
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
    const doCheckAuth = checkAuth(route?.roles);

    if (!doCheckAuth) {
        return (
            <>
                <Redirect to="/" />;
            </>
        );
    }

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
