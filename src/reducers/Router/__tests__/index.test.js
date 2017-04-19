import { LOCATION_CHANGE } from 'react-router-redux';
import routerReducer from '~reducers/Router';


describe('routerReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      locationBeforeTransitions: null
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(routerReducer(undefined, {})).toEqual(expectedResult);
  });

  it('updates the path', () => {
    const fixture = {
      type: LOCATION_CHANGE,
      payload: {
        path: '/bar',
        action: 'PUSH'
      }
    };
    const expectedResult = {
      locationBeforeTransitions: fixture.payload
    };

    expect(routerReducer(state, fixture)).toEqual(expectedResult);
  });
});
