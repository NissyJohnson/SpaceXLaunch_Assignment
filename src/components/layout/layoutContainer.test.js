/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import LayoutContainer from "./layoutContainer";

Enzyme.configure({ adapter: new Adapter() });

const state = {
  loading: false,
  launchYears: [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
  ],
  cardDetails: [
    {
      missionName: "FalconSat",
      flightNumber: 1,
      missionId: [],
      launchYear: "2006",
      launchSuccess: false,
      landSuccess: null,
      image: "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png",
    },
  ],
};

const fns = jest.fn();
let scope;
let store;
// eslint-disable-next-line no-shadow
const renderMount = (state, props) => {
  store = createStore((k) => k, state);
  store.dispatch = jest.fn();
  return mount(
    <Provider store={store}>
      <LayoutContainer {...state} {...props} />
    </Provider>
  );
};
describe("LayoutContainer", () => {
  beforeEach(() => {
    window.s = { t: jest.fn() };
    scope = { ...state, ...fns };
  });

  afterEach(() => {
    window.s.t.mockClear();
  });

  test("Should render the <Layoutcontainer />", () => {
    const wrapper = renderMount(scope);
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.exists()).toBe(true);
  });
});
