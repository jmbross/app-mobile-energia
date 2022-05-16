import { Sites, SiteItem } from '@/types/main';

// Types
//
// Reset
export const RESET_MAIN = 'main/RESET';

// Request All Data
export const SITES_REQUEST = 'main/SITES_REQUEST';
export const SITES_SUCCESS = 'main/SITES_SUCCESS';
export const SITES_FAILURE = 'main/SITES_FAILURE';

// Change site
export const CHANGE_SITE_REQUEST = 'main/CHANGE_SITE_REQUEST';
export const CHANGE_SITE_SUCCESS = 'main/CHANGE_SITE_SUCCESS';
export const CHANGE_SITE_FAILURE = 'main/CHANGE_SITE_FAILURE';

// Update site
export const UPDATE_SITE_REQUEST = 'main/UPDATE_SITE_REQUEST';
export const UPDATE_SITE_SUCCESS = 'main/UPDATE_SITE_SUCCESS';
export const UPDATE_SITE_FAILURE = 'main/UPDATE_SITE_FAILURE';

// Delete site
export const DELETE_SITE_REQUEST = 'main/DELETE_SITE_REQUEST';
export const DELETE_SITE_SUCCESS = 'main/DELETE_SITE_SUCCESS';
export const DELETE_SITE_FAILURE = 'main/DELETE_SITE_FAILURE';

// Hamburger
export const CHANGE_HAMBURGER = 'main/CHANGE_HAMBURGER';

interface ResetMain {
  type: typeof RESET_MAIN;
}

interface SitesRequestAction {
  type: typeof SITES_REQUEST;
}

interface SitesRequestAction {
  type: typeof SITES_REQUEST;
}

interface SitesSuccessAction {
  type: typeof SITES_SUCCESS;
  sites: Sites;
  currentSite?: SiteItem;
}

interface SitesFailureAction {
  type: typeof SITES_FAILURE;
}

interface ChangeSiteRequestAction {
  type: typeof CHANGE_SITE_REQUEST;
  siteId: string;
}

interface ChangeSiteSuccessAction {
  type: typeof CHANGE_SITE_SUCCESS;
  currentSite: SiteItem;
}

interface ChangeSiteFailureAction {
  type: typeof CHANGE_SITE_FAILURE;
}

interface UpdateSiteRequestAction {
  type: typeof UPDATE_SITE_REQUEST;
  siteId: string;
}

interface UpdateSiteSuccessAction {
  type: typeof UPDATE_SITE_SUCCESS;
  siteId: string;
  payload: { [k: string]: string };
}

interface UpdateSiteFailureAction {
  type: typeof UPDATE_SITE_FAILURE;
}

interface DeleteSiteRequestAction {
  type: typeof DELETE_SITE_REQUEST;
  siteId: string;
}

interface DeleteSiteSuccessAction {
  type: typeof DELETE_SITE_SUCCESS;
}

interface DeleteSiteFailureAction {
  type: typeof DELETE_SITE_FAILURE;
}

interface ChangeHamburgerAction {
  type: typeof CHANGE_HAMBURGER;
  open: boolean;
}

type InitActionTypes =
  | ResetMain
  | SitesRequestAction
  | SitesSuccessAction
  | SitesFailureAction
  | ChangeSiteRequestAction
  | ChangeSiteSuccessAction
  | ChangeSiteFailureAction
  | UpdateSiteRequestAction
  | UpdateSiteSuccessAction
  | UpdateSiteFailureAction
  | DeleteSiteRequestAction
  | DeleteSiteSuccessAction
  | DeleteSiteFailureAction
  | ChangeHamburgerAction;

// initial state
//
export interface MainState {
  sites: Sites;
  currentSite?: SiteItem;
  hamburgerOpen: boolean;
}

const initialState: MainState = {
  sites: {
    sitesConfirmed: true,
    agreedUponProgram: '',
    sites: [],
    count: 1,
  },
  currentSite: undefined,
  hamburgerOpen: false,
};

// Reducer
//
// eslint-disable-next-line default-param-last
export default (state: MainState = initialState, action: InitActionTypes): MainState => {
  switch (action.type) {
    case RESET_MAIN:
      return {
        ...initialState,
      };

    case SITES_SUCCESS:
      return {
        ...state,
        sites: action.sites,
        currentSite: action.currentSite || action.sites.sites[0],
      };

    case SITES_FAILURE:
      return {
        ...state,
      };

    case CHANGE_SITE_SUCCESS:
      return {
        ...state,
        currentSite: action.currentSite,
      };

    case CHANGE_SITE_FAILURE:
      return {
        ...state,
      };

    case UPDATE_SITE_SUCCESS:
      return {
        ...state,
        sites: {
          ...state.sites,
          sites: state.sites.sites.map((site) => {
            if (site.id === action.siteId) {
              Object.assign(site, action.payload);
            }

            return site;
          }),
        },
      };

    case UPDATE_SITE_FAILURE:
      return {
        ...state,
      };

    case DELETE_SITE_SUCCESS:
      return {
        ...state,
      };

    case DELETE_SITE_FAILURE:
      return {
        ...state,
      };

    case CHANGE_HAMBURGER:
      return {
        ...state,
        hamburgerOpen: action.open,
      };

    default:
      return state;
  }
};

// Actions
//
export const sitesRequest = (siteName: string) => ({ type: SITES_REQUEST, siteName });

export const changeSiteRequest = (siteId: string) => ({
  type: CHANGE_SITE_REQUEST,
  siteId,
});

export const updateSiteRequest = (siteId: string, payload: { [k: string]: string }) => ({
  type: UPDATE_SITE_REQUEST,
  siteId,
  payload,
});

export const deleteSiteRequest = (siteId: string) => ({
  type: DELETE_SITE_REQUEST,
  siteId,
});

export const changeHamburger = (open: boolean) => ({
  type: CHANGE_HAMBURGER,
  open,
});
