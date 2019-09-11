import React from 'react';
import menu from './menu.jsx';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

describe('<menu />', () => {
    let props;
    beforeEach(() => {
        props = {
            menuItems: ['Green Energy', 'About', 'Careers', 'Contact Us']
        }
    })
    it('should render the component', () => {
        const wrapper = shallow(<menu {...props} />);
       expect(wrapper).toHaveLength(1);
    });
    it('should have the correct props set', () => {
        const wrapper = shallow(<menu {...props}  />);
        const expectedProps = [ 'Green Energy', 'About', 'Careers', 'Contact Us' ];
        expect(wrapper.props().menuItems).toEqual(expectedProps);
    });
});