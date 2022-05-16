import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { sitesRequest, changeSiteRequest, updateSiteRequest, deleteSiteRequest, changeHamburger } from '@/stores/main';

export default function useMain() {
  const dispatch = useDispatch();

  const fetchSites = useCallback((siteName: string) => dispatch(sitesRequest(siteName)), [dispatch]);

  const fetchChangeSite = useCallback((siteId: string) => dispatch(changeSiteRequest(siteId)), [dispatch]);

  const fetchUpdateSite = useCallback(
    (siteId: string, payload: { [k: string]: string }) => dispatch(updateSiteRequest(siteId, payload)),
    [dispatch],
  );

  const fetchDeleteSite = useCallback((siteId: string) => dispatch(deleteSiteRequest(siteId)), [dispatch]);

  const fetchChangeHamburger = useCallback((open: boolean) => dispatch(changeHamburger(open)), [dispatch]);

  return {
    fetchSites,
    fetchChangeSite,
    fetchUpdateSite,
    fetchDeleteSite,
    fetchChangeHamburger,
  };
}
