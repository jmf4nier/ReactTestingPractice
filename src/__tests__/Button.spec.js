import React from "react";
// import { create, act } from "react-test-renderer";
import ReactDOM from 'react-dom'
import {act} from 'react-dom/test-utils'

//  test uses act from the react-test-renderer specifically for hooks

// describe("Button component", () => {
//     test("it shows the expected text when clicked", () => {
//       let component;
//       act(() => {
//         component = create(<Button text="SUBSCRIBE TO BASIC" />);
//       });
//       const instance = component.root;
//       const button = instance.findByType("button");
//       act(() => button.props.onClick());
//       expect(button.props.children).toBe("PROCEED TO CHECKOUT");
//     });
//   });


//  test uses ReactDOM to mount object and also to fire a DOM event on the Button
let container;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});
afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

const Button = (props) => {
    const [text, changeText] = React.useState("")
    return (
        <button onClick={()=>changeText("PROCEED TO CHECKOUT")}>{text || props.text}</button>
    )
} 
describe("Button component", () => {
    test("it shows the expected text when clicked", () => {
      act(() => {
        ReactDOM.render(<Button text="SUBSCRIBE TO BASIC" />, container);
      });
      const button = container.getElementsByTagName("button")[0];
      
      act(() => {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
      expect(button.textContent).toBe("PROCEED TO CHECKOUT");
    });
  })