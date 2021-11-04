import { createTheme } from '@material-ui/core/styles'

const interFont = {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    src: `url('../fonts/Inter.ttf')`
};

const fontFamily = ['Inter', 'serif'].join(',');
const fontFamilyBold = ['Inter Bold', 'serif'].join(',');

export const fontSizes = {
    fs32lh40ls0: {
        fontSize: '32px',
        lineHeight: '40px',
        letterSpacing: '0'
    },
    fs24lh32ls25: {
        fontSize: '24px',
        lineHeight: '32px',
        letterSpacing: '0.25px'
    },
    fs16lh24ls44: {
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.44px'
    },
    fs14lh20ls4: {
        fontSize: '14px',
        lineHeight: '20px',
        letterSpacing: '0.4px'
    },
    fs12lh16ls4: {
        fontSize: '12px',
        lineHeight: '16px',
        letterSpacing: '0.4px'
    }
};

export const fontSizesCSS = {
    fs32lh40ls0: {
        'font-size': '32px',
        'line-height': '40px',
        'letter-spacing': '0'
    },
    fs24lh32ls25: {
        'font-size': '24px',
        'line-height': '32px',
        'letter-spacing': '0.25px'
    },
    fs16lh24ls44: {
        'font-size': '16px',
        'line-height': '24px',
        'letter-spacing': '0.44px'
    },
    fs14lh20ls4: {
        'font-size': '14px',
        'line-height': '20px',
        'letter-spacing': '0.4px'
    },
    fs12lh16ls4: {
        'font-size': '12px',
        'line-height': '16px',
        'letter-spacing': '0.4px'
    }
};

export const fontWeightsCSS = {
    fontWeightEasy: 400,
    fontWeightMedium: 700
};

export const zIndexesCSS = {
    zIndexItem: 1,
    zIndexFilter: 20,
    zIndexPageButtons: 50,
    zIndexDropdown: 100,
    zIndexProfile: 101,
    zIndexDragAndDrop: 9999
};

const getTheme = () => {
    return createTheme({
        typography: {
            fontFamily,
            fontFamilyBold,
            fontSizes,
            button: {
                ...fontSizes.fs16lh24ls44
            }
        },
        palette: {
            primary: {
                main: '#0066FF',
                focused: 'linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0066FF',
                pressed: 'linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), #0066FF'
            },
            error: {
                main: '#F44336',
                hover: 'palevioletred'
            },
            success: {
                main: '#89B613'
            },
            background: {
                default: 'linear-gradient(0deg, rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.04)), #ffffff',
                main: '#FAFBFB',
                pressed: '#E6EBEF',
                active: 'rgba(26, 26, 26, 0.05)',
                contrast: 'rgba(51, 51, 51, 0.05)',
                border: 'rgba(0, 0, 0, 0.2)',
                modal: 'rgba(0, 0, 0, 0.87)',
                container: '#242424'
            },
            dark: {
                main: '#333333'
            },
            white: {
                main: '#FFFFFF'
            },
            grey: {
                main: '#304156',
                light: '#BABABA'
            },
            green: {
                main: '#89B613'
            }
        },
        overrides: {
            MuiCssBaseline: {
                '@global': {
                    '@font-face': [interFont]
                }
            }
        }
    });
};

export default getTheme;
