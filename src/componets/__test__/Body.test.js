import { render, waitFor } from "@testing-library/react"
import Body from '../../componets/Body'
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server"
import store from "../../utils/store"
import { JSON } from "../../contants";
import { act } from "react-dom/test-utils";
import Simmer from "../../componets/Simmer";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(JSON);
        }
    })
})

// test("simmer ui should be present", () => {
//     const simmer = render(
//         <StaticRouter>
//             <Provider store={store}>
//                 <Simmer />
//             </Provider>
//         </StaticRouter>
//     );

//     const simmerList = simmer.getByTestId('simmer-list');
//     expect(simmerList.children.length).toBe(20)

// })



test("Body should load restaurant card", async () => {
    await waitFor(() => {
        const body = render(
          <StaticRouter>
            <Provider store={store}>
              <Body />
            </Provider>
          </StaticRouter>
        );
        
        const restList = body.getByTestId('rest-list');
        expect(restList.children.length).toBe('8');
        console.log(restList.children.length);

    });
  
    // Add your assertions here, after the component has been rendered and updated
  });