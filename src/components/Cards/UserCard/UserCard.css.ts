import styled from 'styled-components';
import { fontSizesCSS, fontWeightsCSS } from '../../../style/themes/theme';

const { fontWeightMedium } = fontWeightsCSS;

export const UserCardWrapper = styled.div`
    border: 1px solid lightgray;
    position: relative;
    padding: 15px;
    margin: 30px;
    display: grid;
    justify-content: center;
    align-content: center;
`;

export const UserCardHeader = styled.div`
    float: left;
    padding: 5px;
`;

export const UserCardTitle = styled.div`
    display: inline-block;
    height: auto;
    margin-bottom: 10px;
    font-weight: ${fontWeightMedium};
    ${fontSizesCSS.fs24lh32ls25};
`;

export const UserGallery = styled.div`
    img {
      padding: 5px;
    }
`;
