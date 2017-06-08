import {
  CHANGE_AUTH
} from './types.js';

export function authenticate(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn,
  }
}
