import React from 'react'
import { Wrapper } from './PageWrapper.style';

function PageWrapper({ children }) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}


export default PageWrapper