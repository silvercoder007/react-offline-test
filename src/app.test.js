import React from 'react';
import app from './app.jsx';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow, mount } from 'enzyme';

describe('<app />', () => {
    it('should render the component', () => {
      const wrapper = shallow(<app />);
      expect(wrapper).toHaveLength(1);
    });
});