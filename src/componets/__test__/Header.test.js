import { render } from "@testing-library/react";
import Header from "../../componets/Header"
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server"

test("Logo should be rendered", () => {
    render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );
});