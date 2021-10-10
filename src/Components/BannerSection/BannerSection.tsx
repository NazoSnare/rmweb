import React from 'react';
import {Button} from '..';
import {
  StyledBanner,
  StyledContent,
  StyledNotice,
} from './BannerSection.styles';

const contentText = `As the world continues to adapt to COVID-19, we offer our expert analysis and in-depth research to unpack what this means for Africa and investing on the continent. The impact COVID-19 had on the RMB methodology in assessing investment attractiveness, come under the spotlight in this year’s report.`;
const BannerSection: React.FC = () => {
  return (
    <StyledBanner>
      <StyledContent>
        <div className="heading">
          <Notice title="RMB Africa report" />
        </div>
        <div className="content">{contentText}</div>
        <div className="call-to-actions">
          <Button title="Request the report" margin="0px 9px 0px 0px " />
          <Button isOutline={true} title="watch the video" />
        </div>
      </StyledContent>
    </StyledBanner>
  );
};

interface NoticeProps {
  title: string;
}

export const Notice: React.FC<NoticeProps> = (props) => {
  return (
    <StyledNotice>
      <h1>{props.title}</h1>
    </StyledNotice>
  );
};

export default BannerSection;
