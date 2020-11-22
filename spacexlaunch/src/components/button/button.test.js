import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Button from "./button";

configure({ adapter: new Adapter() });

describe("Button component test", () => {
  const props = {
    classes: "btn btn-primary btn-custom",
    value: "2010",
    click: jest.fn(),
    id: "year02010",
    name: "year",
  };

  it("should render a button", () => {
    const component = shallow(<Button {...props} />);
    console.log(component.debug());
    const button = component.find('[data-testid="button"]').text();
    expect(button).toBe("2010");
  });
});
