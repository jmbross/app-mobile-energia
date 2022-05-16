import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '@/stores/index';
import { SiteItem } from '@/types/main';
import useMain from '@/hooks/useMain';
import MySitesView from './index.view';

const MySitesContainer = () => {
  const {
    main: {
      sites: { sites },
    },
  } = useSelector((state: RootState) => state);

  const [state, setState] = useState<{ site?: SiteItem; siteName: string; disabledSave: boolean }>({
    site: undefined,
    siteName: '',
    disabledSave: true,
  });
  const [modal, setModal] = useState({ programInformation: false, removeSite: false });

  const navigate = useNavigate();
  const { fetchUpdateSite, fetchDeleteSite } = useMain();

  useEffect(() => {
    if (sites.length > 0) {
      const urlSearchParams = new URLSearchParams(window.location.search);
      const siteName = urlSearchParams.get('siteName');

      const findSite = sites.find(({ name }) => name === siteName);

      if (findSite) {
        if (siteName) {
          setState({ ...state, site: findSite, siteName, disabledSave: true });
        }
      } else {
        const site = sites[0];
        setState({ ...state, site, siteName: site.name, disabledSave: true });
      }
    } else {
      setState({ ...state, site: undefined, siteName: '', disabledSave: true });
    }
  }, [sites]);

  const handleSite = (siteId: string) => {
    const site = sites.find((site) => site.id === siteId);
    if (site) {
      setState({ ...state, site, siteName: site.name });

      const pathname = `${window.location.pathname}?siteName=${site.name}`;
      navigate(pathname, { replace: true });
    }
  };

  const handleSiteName = (value: string) => {
    const disabled = state.site?.name === value;

    setState({ ...state, siteName: value, disabledSave: disabled });
  };

  const handleSave = () => {
    const payload = { name: state.siteName };
    if (state.site) {
      fetchUpdateSite(state.site.id, payload);
    }
  };

  const handleDelete = () => {
    if (sites.length === 1) {
      // eslint-disable-next-line no-alert
      alert('There must be one site.');
      return;
    }

    setModal({ ...modal, removeSite: true });
  };

  const handleRemoveSite = () => {
    setModal({ ...modal, removeSite: false });
  };

  const handleModalProgramInformationOpen = () => {
    setModal({ ...modal, programInformation: true });
  };

  const handleModalProgramInformationClose = () => {
    setModal({ ...modal, programInformation: false });
  };

  const handleModalRemoveSiteOk = () => {
    if (state.site) {
      fetchDeleteSite(state.site.id);
    }

    handleRemoveSite();
  };

  return (
    <MySitesView
      sites={sites}
      siteId={state.site?.id}
      siteName={state.siteName}
      siteAddress={state.site?.addressStreet1}
      siteProgram={state.site?.program}
      disabledSave={state.disabledSave}
      onSiteClick={handleSite}
      onProgramInfo={handleModalProgramInformationOpen}
      onChangeSiteName={handleSiteName}
      onSave={handleSave}
      onDelete={handleDelete}
      modalProgramInformation={modal.programInformation}
      modalProgramInformationClose={handleModalProgramInformationClose}
      modalRemoveSite={modal.removeSite}
      modalRemoveSiteClose={handleRemoveSite}
      modalRemoveSiteOk={handleModalRemoveSiteOk}
      modalRemoveSiteCancel={handleRemoveSite}
    />
  );
};

export default MySitesContainer;
