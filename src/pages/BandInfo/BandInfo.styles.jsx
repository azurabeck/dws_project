import styled , {css} from "styled-components";
import { getFontSize, pxToRem } from "../../utils/styled";
import { theme } from '../../assets/styles/theme'
import { colors } from "../../assets/styles/colors";

const ellipseMixin = css`    
    display: -webkit-box;
    overflow: hidden;
    position: relative;
    text-overflow: ellipsis;
    -webkit-line-clamp: 5; 
    -webkit-box-orient: vertical;
`


export const BandCover = styled.div`
    align-items: center;
    background: ${props => `linear-gradient(0deg, rgb(0 0 0 / 80%), rgb(255 0 150 / 0%)) , url(${props.image}) no-repeat center center`};
    background-size: cover;
    display: flex;
    height: ${pxToRem(300)};
    justify-content: center;
    width: 100%;

    h2 {
        color: ${colors.gray[70]};
        margin-top: ${pxToRem(60)};
        padding: 0 ${theme.spacing[2]};
    }
`

export const BandSpecsWrapper = styled.div`
    padding: 0 ${theme.spacing[2]};
`

export const BandSpecs = styled.section`
    display: grid;
    grid-auto-columns: 1fr; 
    grid-template-columns: 1fr 2fr 1fr; 
    grid-template-rows: 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
    "genre image plays"; 
    padding-top: ${pxToRem(10)};

    p {
        color: ${colors.gray[30]};
        font-size: ${getFontSize('md')};
        font-weight: 500;
        text-transform: uppercase;

        &.--1 {            
            grid-area: 'genre';
        }
        &.--2 {            
            grid-area: 'plays';
            text-align: right;
        }
    }

    .ImageWrapper {
        align-items: center;
        display: flex;
        grid-area: 'image';
        justify-content: center;

        img {
            border-radius: 50%;
            box-shadow: 3px 5px 10px 0px #00000073;
            height: ${pxToRem(150)};
            margin-top: ${pxToRem(-85)};
            min-height: ${pxToRem(150)};
            min-width: ${pxToRem(150)};
            text-align: center;
            width: ${pxToRem(150)};
        }        
    }
`

export const BandAbout = styled.p`
    ${props => props.isAboutOpen ? null : ellipseMixin}
    margin-top: ${theme.spacing[3]};

    &::after {
        content: "";
        display: ${ props => !props.isAboutOpen ? 'block' : 'none'};
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, white, #ffffff00);
        z-index: 1;
    }

`

export const BandPlusSeparator = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: ${theme.spacing[4]};
    max-width: 100%;

    label {
        background: ${colors.gray[50]};
        display: block;
        height: ${pxToRem(1)};
        width: 100%;
    }

    svg {
        margin: 0 ${theme.spacing[2]};
        fill: ${colors.gray[0]};
        width: ${pxToRem(35)};
    }
`

export const BandDiscography = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: ${theme.spacing[2]};

    h3 {
        text-transform: uppercase;
    }
`

export const GridContainer = styled.div`
    display: grid;
    max-width: 100%;
    margin-inline: auto;
    padding-inline: 2rem;
    margin-top: 50px;
    width: 100%;
`

export const BandDiscoCarroussel = styled.div`
    display: grid;
    gap: .125rem;
    grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));

    .card {
        display: grid;
        aspect-ratio: 1 / 1;

        & > * {
            grid-column: 1 / 2;
            grid-row: 1 / 2;
        }

        &__image {
            aspect-ratio: 1 / 1;
            max-width: 100%;
            object-fit: cover;
            width: 100%;
        }

        &__content {
            align-self: end;
            background: linear-gradient(0deg, black, transparent);
            box-shadow: 0 0.25rem 1rem rgb(0 0 0 / 10%);
            color: ${colors.gray[70]};
            margin: 0.1rem;
            padding: 0.5rem;
            -webkit-align-self: end;
            -ms-flex-item-align: end;
            z-index: 1;

            h2 {
                font-size: ${getFontSize('md')};
            }
            p {
                font-size: ${getFontSize('xxs')};
            }
        }
    }
`
