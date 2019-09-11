import React from "react";
import chart from "./chart.jsx";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import { shallow } from "enzyme";

describe("<chart />", () => {
  let props;
  beforeEach(() => {
    props = {
      data: {
        from: "2019-09-11T07:30Z",
        to: "2019-09-11T08:00Z",
        generationmix: [
          {
            fuel: "biomass",
            perc: 10.3
          },
          {
            fuel: "coal",
            perc: 2.1
          },
          {
            fuel: "imports",
            perc: 12.2
          },
          {
            fuel: "gas",
            perc: 29.1
          },
          {
            fuel: "nuclear",
            perc: 29.9
          },
          {
            fuel: "other",
            perc: 0.8
          },
          {
            fuel: "hydro",
            perc: 2.3
          },
          {
            fuel: "solar",
            perc: 2.7
          },
          {
            fuel: "wind",
            perc: 10.6
          }
        ]
      }
    };
  });
  it("should render the component", () => {
    const wrapper = shallow(<chart {...props} />);
    expect(wrapper).toHaveLength(1);
  });
  it("should have props", () => {
    const wrapper = shallow(<chart {...props} />);
    expect(wrapper.props()).toBeDefined();
  });
  it("should contain an array of data", () => {
    const wrapper = shallow(<chart {...props} />);
    expect(wrapper.props().data.generationmix).toEqual([
      { fuel: "biomass", perc: 10.3 },
      { fuel: "coal", perc: 2.1 },
      { fuel: "imports", perc: 12.2 },
      { fuel: "gas", perc: 29.1 },
      { fuel: "nuclear", perc: 29.9 },
      { fuel: "other", perc: 0.8 },
      { fuel: "hydro", perc: 2.3 },
      { fuel: "solar", perc: 2.7 },
      { fuel: "wind", perc: 10.6 }
    ]);
  });
});
