import styled from 'styled-components';
import { fontSizesCSS, fontWeightsCSS } from '../../../style/themes/theme';

const { fontWeightMedium } = fontWeightsCSS;

export const NewsCardWrapper = styled.div`
    border: 1px solid lightgray;
    position: relative;
    margin: 30px;
    padding: 15px;
    min-height: 100px;
`;

export const NewsCardHeader = styled.div`
    display: inline;
`;

export const NewsCardTitle = styled.div`
    display: inline-block;
    height: auto;
    padding: 5px 20px;
    font-weight: ${fontWeightMedium};
    ${fontSizesCSS.fs24lh32ls25};
`;

export const NewsCardDescription = styled.div`
    clear: both;
    padding: 5px 20px;
    text-align: justify;
    text-indent: 30px;
    line-height: 1.5;
`;
