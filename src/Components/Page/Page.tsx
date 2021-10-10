import React from 'react'
import { StyledPage } from './Page.styles';

const Page: React.FC = ({ children}) => {
    return (
       <StyledPage>
          {children}
       </StyledPage>
    )
}

export default Page;
