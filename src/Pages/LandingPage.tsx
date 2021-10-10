import React from 'react';
import {
  // BannerSection,
  // Divider,
  // FloatingSection,
  // TopBar,
  Page,
  // ArticlesSection,
  // EditionsSection,
} from '../Components';

import {data} from '../Utils/mock/';
import createComponent from '../Utils/createComponent/index';
import {RootStore} from '../Utils/redux/store';
import {useSelector} from 'react-redux';

const LandingPage: React.FC = () => {
  const serverContent = useSelector((state: RootStore) => state.articles);
  const cmsContent = useSelector((state: RootStore) => state.cms);
  console.log('server content', serverContent);
  console.log('cms server content', cmsContent);
  return (
    <Page>
      {/* <TopBar />
      <Divider />
      <BannerSection />
      <FloatingSection />
      <ArticlesHeading />
      <EditionsSection /> */}
      {data.content.body.map((c) => createComponent(c))}
    </Page>
  );
};

export default LandingPage;
