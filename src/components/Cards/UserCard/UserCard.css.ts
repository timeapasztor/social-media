import styled from 'styled-components';
import getTheme, { fontSizesCSS, fontWeightsCSS } from '../../../style/themes/theme';

const { fontWeightMedium } = fontWeightsCSS;
const theme: any = getTheme();

export const UserCardWrapper = styled.div`
    border: 1px solid lightgray;
    position: relative;
    margin: 30px;
`;

export const UserCardHeader = styled.div`
    float: left;
`;

export const UserCardTitle = styled.div`
    display: inline-block;
    height: auto;
    margin-bottom: 10px;
    font-weight: ${fontWeightMedium};
    ${fontSizesCSS.fs24lh32ls25};
`;
