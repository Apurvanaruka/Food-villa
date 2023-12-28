import { render } from "@testing-library/react";
import Header from "../../componets/Header"
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server"

test("Logo should be rendered", () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );
    const logo = header.getByTestId('logo')
    expect(logo.src).toBe('http://localhost/dummyLogo.png');
});

test("cart should be 0",()=>{
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    )
     
    const cart = header.getByTestId('cart');
    expect(cart.innerHTML).toBe("cart 0 ");


});
