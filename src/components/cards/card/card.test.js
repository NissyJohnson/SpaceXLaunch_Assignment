import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './card';

configure({ adapter: new Adapter() });

const findByAttr = (wrapper, findId) => {
  return wrapper.find(`[data-testid="${findId}"]`).text();
};

const props = {
  cardDetail: {
    missionName: 'FalconSat',
    flightNumber: 1,
    missionId: ['EE86F74'],
    launchYear: '2006',
    launchSuccess: false,
    landSuccess: null,
    image: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
  },
};

describe('Have props', () => {
  it('Should render with props', () => {
    const component = shallow(<Card {...props} />);
    const heading = findByAttr(component, 'card-heading');
    const missionid = findByAttr(component, 'missionid');
    const launchYear = findByAttr(component, 'launchYear');
    const launchSuccess = findByAttr(component, 'launchSuccess');
    const landSuccess = findByAttr(component, 'landSuccess');
    expect(heading).toBe('FalconSat#1');
    expect(missionid).toBe('Mission Ids:EE86F74');
    expect(launchYear).toBe('Launch Year:2006');
    expect(launchSuccess).toBe('Successful launch:False');
    expect(landSuccess).toBe('Successful landing:False');
  });
});
