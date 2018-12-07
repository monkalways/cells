import { mapStateToProps } from '../HeaderContainer';

describe('HeaderContainer', () => {
  it('should mapStateToProps', () => {
    const state = {};
    const detainee = {};
    const isDetaineeProfileLoaded = false;

    const result = mapStateToProps(state, detainee, isDetaineeProfileLoaded);

    expect(result).toEqual({
      detainee,
      isDetaineeProfileLoaded,
    });
  });
});
