import { Message } from '@/types/message';

// Types
//
// Reset
export const RESET_MESSAGES = 'message/RESET_MESSAGES';

// Request All Data
export const MESSAGES_REQUEST = 'message/MESSAGES_REQUEST';
export const MESSAGES_SUCCESS = 'message/MESSAGES_SUCCESS';
export const MESSAGES_FAILURE = 'message/MESSAGES_FAILURE';

// Select Message
export const MESSAGE_SELECT = 'message/MESSAGE_SELECT';

interface ResetMessagesAction {
  type: typeof RESET_MESSAGES;
}

interface MessagesRequestAction {
  type: typeof MESSAGES_REQUEST;
}

interface MessagesSuccessAction {
  type: typeof MESSAGES_SUCCESS;
  messages: Message[];
}

interface MessagesFailureAction {
  type: typeof MESSAGES_FAILURE;
}

interface MessageSelectAction {
  type: typeof MESSAGE_SELECT;
  messageId: string;
}

type InitActionTypes =
  | ResetMessagesAction
  | MessagesRequestAction
  | MessagesSuccessAction
  | MessagesFailureAction
  | MessageSelectAction;

// initial state
//
export interface MessagesState {
  // Messages
  messages: Message[];

  // Current Message
  selectedMessageId?: string;
}

const initialState: MessagesState = {
  messages: [],
  selectedMessageId: undefined,
};

// Reducer
//
// eslint-disable-next-line default-param-last
export default (state: MessagesState = initialState, action: InitActionTypes): MessagesState => {
  switch (action.type) {
    case RESET_MESSAGES:
      return {
        ...initialState,
      };

    case MESSAGES_SUCCESS:
      return {
        ...state,
        messages: action.messages,
        selectedMessageId: action.messages[0].id || undefined,
      };

    case MESSAGES_FAILURE:
      return {
        ...state,
      };

    case MESSAGE_SELECT:
      return {
        ...state,
        selectedMessageId: action.messageId,
      };

    default:
      return state;
  }
};

// Actions
//
export const messagesRequest = () => ({ type: MESSAGES_REQUEST });

export const messageSelect = (messageId: string) => ({ type: MESSAGE_SELECT, messageId });
