import React from 'react';
import { shallow } from 'enzyme';

import { DialogContentText, Dialog } from '@material-ui/core';
import { ScanCardDialogComponent } from '../ScanCardDialogComponent';
import Loading from '../../Loading';
import commonConstants from '../../../constants';

describe('ScanCardDialogComponent', () => {
  let classes;
  let isSignInDialogOpen;
  let isAuthenticating;
  let isAuthenticationFailed;
  let onClose;
  let authenticate;
  let handleSignIn;

  beforeEach(() => {
    classes = {
      dialog: 'dialog',
    };
    isSignInDialogOpen = false;
    isAuthenticating = false;
    isAuthenticationFailed = false;
    onClose = jest.fn();
    authenticate = jest.fn();
    handleSignIn = jest.fn();
  });

  const setup = () => shallow(<ScanCardDialogComponent
    classes={classes}
    isSignInDialogOpen={isSignInDialogOpen}
    isAuthenticating={isAuthenticating}
    isAuthenticationFailed={isAuthenticationFailed}
    onClose={onClose}
    authenticate={authenticate}
    handleSignIn={handleSignIn}
  />);

  it('should render "Please scan your ID card to proceed" if not authenticating', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find(DialogContentText).html()).toContain('Please scan your ID card to proceed');
  });

  it('should render "Authentication Failed" if not authenticating but authentication failed', () => {
    isAuthenticationFailed = true;
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find(DialogContentText).html()).toContain('Authentication Failed');
  });

  it('should render loading component if authenticating', () => {
    isAuthenticating = true;
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find(Loading)).toExist();
  });

  it('should add keydown event listener when componentDidMount is called, and remove event listener when componentWillUnmount is called', () => {
    const map = {};
    window.addEventListener = jest.fn((event, eventListener) => {
      map[event] = eventListener;
    });
    window.removeEventListener = jest.fn((event) => {
      map[event] = null;
    });
    const wrapper = setup();

    wrapper.instance().componentDidMount();
    map.keydown({ key: 'A' });

    expect(handleSignIn).toBeCalled();

    wrapper.instance().componentWillUnmount();
    expect(map.keydown).toBe(null);
    expect(wrapper.instance().isCancelled).toBe(true);
  });

  describe('handleKeyDown', () => {
    let map;

    beforeEach(() => {
      map = {};
      window.addEventListener = jest.fn((event, eventListener) => {
        map[event] = eventListener;
      });
      window.removeEventListener = jest.fn((event) => {
        map[event] = null;
      });
    });

    it('should do nothing if isCancelled is true', () => {
      const wrapper = setup();
      wrapper.instance().isCancelled = true;

      map.keydown({ key: 'A' });

      expect(wrapper.state('cardId')).toBe('');
    });

    it('should call handleSignIn if isSignInDialogOpen is false', () => {
      setup();

      map.keydown({ key: 'A' });

      expect(handleSignIn).toBeCalled();
    });

    it('should not call handleSignIn if isSignInDialogOpen is true', () => {
      isSignInDialogOpen = true;
      setup();

      map.keydown({ key: 'A' });

      expect(handleSignIn).not.toBeCalled();
    });

    it('should collect card id from keydown events', () => {
      const wrapper = setup();

      map.keydown({ key: 'A' });
      map.keydown({ key: 'B' });
      map.keydown({ key: 'C' });
      map.keydown({ key: '1' });
      map.keydown({ key: '2' });
      map.keydown({ key: '3' });

      expect(wrapper.state('cardId')).toBe('ABC123');
    });

    it(`should reset card id and call authencate if ${
      commonConstants.SCAN_CARD_ID_LENGTH
    } characters are collected from keydown events`, () => {
      const wrapper = setup();

      map.keydown({ key: 'A' });
      map.keydown({ key: 'B' });
      map.keydown({ key: 'C' });
      map.keydown({ key: 'D' });
      map.keydown({ key: 'E' });
      map.keydown({ key: 'F' });
      map.keydown({ key: 'G' });
      map.keydown({ key: '1' });
      map.keydown({ key: '2' });
      map.keydown({ key: '3' });
      map.keydown({ key: '4' });
      map.keydown({ key: '5' });
      map.keydown({ key: '6' });
      map.keydown({ key: '7' });
      map.keydown({ key: '8' });
      map.keydown({ key: '9' });

      expect(authenticate).toBeCalledWith('ABCDEFG123456789');
      expect(wrapper.state('cardId')).toBe('');
    });
  });

  it('should handle fake users click for now (TO BE REMOVED)', () => {
    const wrapper = setup();
    wrapper.find('#fakeUserLoginButton').simulate('click');

    expect(authenticate).toBeCalledWith('b5a3d600f8ff12e0');
  });

  it('should handle dialog close', () => {
    const wrapper = setup();
    wrapper.find(Dialog).simulate('close');

    expect(onClose).toBeCalled();
  });
});
