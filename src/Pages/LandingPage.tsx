import React, {useEffect} from 'react';
import {
  // BannerSection,
  // Divider,
  // FloatingSection,
  // TopBar,
  Page,
  // ArticlesSection,
  // EditionsSection,
} from '../Components';
import createComponent from '../Utils/createComponent/index';
import {RootStore} from '../Utils/redux/store';
import {useDispatch, useSelector} from 'react-redux';
import {GetCMS} from '../Utils/redux/actions/cms.actions';

const LandingPage: React.FC = () => {
  const articles = useSelector((state: RootStore) => state.articles);
  const cmsState = useSelector((state: RootStore) => state.cms);
  const dispatch = useDispatch();

  /**
   * No dependcy so that it always fetches the latest layout
   */
  useEffect(() => {
    dispatch(GetCMS());
  }, []);

  return (
    <Page>
      {/* <TopBar />
      <Divider />
      <BannerSection />
      <FloatingSection />
      <ArticlesHeading />
      <EditionsSection /> */}
      {cmsState.loading ? (
        <h1>Loading...</h1>
      ) : (
        cmsState?.cms.map((c) => createComponent(c))
      )}
    </Page>
  );
};

export default LandingPage;
