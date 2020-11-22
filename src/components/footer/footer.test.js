import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './footer';

configure({ adapter: new Adapter() });

describe('Footer Component: Visual', () => {
  const props = {
    footer: 'Developed by: Nissy Johnson',
  };

  it('should render a footer', () => {
    const component = shallow(<Footer {...props} />);
    const footer = component.find('[data-testid="footer"]').text();
    expect(footer).toBe('Developed by: Nissy Johnson');
  });
});

describe('Have props', () => {
  const props = {
    footer: 'Developed by: Nissy Johnson',
  };

  it('Should render with props', () => {
    const component = shallow(<Footer {...props} />);
    const footer = component.find('[data-testid="footer"]').text();
    expect(footer).toBe('Developed by: Nissy Johnson');
  });
});

describe('Have no props', () => {
  it('Should render with props', () => {
    const component = shallow(<Footer />);
    const footer = component.find('[data-testid="footer"]').text();
    expect(footer).toBe('');
  });
});
