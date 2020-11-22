import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "./header";

configure({ adapter: new Adapter() });

describe("Header Component: Visual", () => {
  const props = {
    heading: "SpaceX Launch Program",
  };

  it("should render a heading", () => {
    const component = shallow(<Header {...props} />);
    const heading = component.find('[data-testid="header"]').text();
    expect(heading).toBe("SpaceX Launch Program");
  });
});

describe("Have props", () => {
  const props = {
    heading: "SpaceX Launch Program",
  };
  test("Should render the <Header />", () => {
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.exists()).toBe(true);
  });

  it("Should render with props", () => {
    const component = shallow(<Header {...props} />);
    const heading = component.find('[data-testid="header"]').text();
    expect(heading).toBe("SpaceX Launch Program");
  });
});
describe("Have no props", () => {
  it("Should render with props", () => {
    const component = shallow(<Header />);
    const heading = component.find('[data-testid="header"]').text();
    expect(heading).toBe("");
  });
});
