import React from 'react';
import ReactDOM from "react-dom";
import { create } from 'react-test-renderer';
import { act } from "react-dom/test-utils";
import Button from '../Button';



/**
 * no action with user only render 
 */

// function Button() {
//     return <button>Nothing to do for now</button>
// }

// describe("Button component", () => {
//     test('should match the snapshot ', () => {
//         const button = create(<Button />);
//         expect(button.toJSON()).toMatchSnapshot();
//     })
    
// })

/**
 *  for class based components & click event
 */
// describe("Button component", () => {
//     test("it shows the expected text when clicked", () => {
//       const component = create(<Button text="Subscribe to Basic" />);
//       const instance = component.root;
//       const button = instance.findByType("button");
//       button.props.onClick();
//       expect(button.props.children).toBe("Proceed to Checkout");
//     });
// });

/**
 *  using react hooks with  click event
 */

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
})

describe("Button Component", () => {
    test("it shows the expected text when clicked", () => {
        act(() => {
            ReactDOM.render(<Button text="Subscribe to Basic" />, container);
        });
        const button = container.getElementsByTagName("button")[0];
        expect(button.textContent).toBe("Subscribe to Basic");
        act(() => {
            button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });
        expect(button.textContent).toBe("Proceed to Checkout");
    });
});