import { createReducer } from '../../utils/createReducer';
import { BehaviorState } from '../types';

import {
  BehaviorActions,
  TOGGLE_CHAT,
  TOGGLE_DISABLED,
  TOGGLE_INPUT_DISABLED,
  TOGGLE_MESSAGE_LOADER
} from '../actions/types';

const initialState = {
  showChat: false,
  disabledInput: false,
  messageLoader: false,
  disabled: false,
  disabledUi: null
};

const behaviorReducer = {
  [TOGGLE_CHAT]: (state: BehaviorState) => ({ ...state, showChat: !state.showChat}),

  [TOGGLE_DISABLED]: (state: BehaviorState) => ({ ...state, disabled: !state.disabled }),

  [TOGGLE_INPUT_DISABLED]: (state: BehaviorState) => ({ ...state, disabledInput: !state.disabledInput }),

  [TOGGLE_MESSAGE_LOADER]: (state: BehaviorState) => ({ ...state, messageLoader: !state.messageLoader })
};

export default (state: BehaviorState = initialState, action: BehaviorActions) => createReducer(behaviorReducer, state, action);
