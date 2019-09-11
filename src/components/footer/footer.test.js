import React from "react";
import Footer from "./footer.jsx";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import { shallow } from "enzyme";

describe("<Footer />", () => {
  it("should render the component", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toHaveLength(1);
  });
  it("should contain a footer section", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find("footer")).toBeTruthy();
  });
  it("should contain a footer heading classname", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find(".footer__heading")).toBeTruthy();
  });
  it("should contain a heading", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find("h3").text()).toBe("KiWi Power");
  });
  it("should contain a footer text classname", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find(".footer__text")).toBeTruthy();
  });
  it("should contain footer text", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find("p").text()).toBe(
      "We are the leading demand response aggregator, delivering significant revenues to large users of electricity since 2009. Demand Response reduces electricity consumption at peak times. This creates a greener, more cost effective grid, reduces the need for inefficient backup power stations and provides balancing requirements and security of supply to System Operators and commercial sites."
    );
  });
});
