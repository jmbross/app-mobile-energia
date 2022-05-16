export const LOADING = 'loading/LOADING';
export const LOADED = 'loading/LOADED';
export const CHANGE_LOADING = 'loading/CHANGE_LOADING';

// Types
//
interface LoadingAction {
  type: typeof LOADING;
}

interface LoadedAction {
  type: typeof LOADED;
}

interface ChangeLoadingAction {
  type: typeof CHANGE_LOADING;
  loading: boolean;
}

type InitActionTypes = LoadingAction | LoadedAction | ChangeLoadingAction;

// initial state
//
export interface LoadingState {
  loading: boolean;
}

const initialState: LoadingState = {
  loading: false,
};

// Reducer
//
// eslint-disable-next-line default-param-last
export default (state: LoadingState = initialState, action: InitActionTypes): LoadingState => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };

    case LOADED:
      return {
        ...state,
        loading: false,
      };

    case CHANGE_LOADING:
      return {
        ...state,
        loading: action.loading,
      };

    default:
      return state;
  }
};

export const changeLoading = (loading: boolean) => ({ type: CHANGE_LOADING, loading });
