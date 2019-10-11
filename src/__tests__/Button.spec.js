import React from "react";
import { create } from "react-test-renderer";

describe("Button component", () => {
  test("Matches the snapshot", () => {
    const button = create(<Button />);
    expect(button.toJSON()).toMatchSnapshot();
  });
});

const Button = ()=> <button>do nothing</button>