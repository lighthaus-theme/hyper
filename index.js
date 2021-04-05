
'use strict';

const backgroundColor = '#18191E';
const foregroundColor = '#FFEE79';
const borderColor = '#21252D';
const cursorColor = '#FFFF00';
const colors = {
  black: '#18191E',
  red: '#FC2929',
  green: '#44B273',
  yellow: '#E25600',
  blue: '#1D918B',
  magenta: '#D16BB7',
  cyan: '#00BFA3',
  white: '#CCCCCC',
  lightBlack: '#8E8D8D',
  lightRed: '#FF5050',
  lightGreen: '#50C16E',
  lightYellow: '#ED722E',
  lightBlue: '#47A8A1',
  lightMagenta: '#D68EB2',
  lightCyan: '#5AD1AA',
  lightWhite: '#FFFADE'
};

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
    `,
     css: `
      ${config.css || ''}
      .tabs_list .tab_tab.tab_active .tab_text  {
        border: transparent;
        font-weight: bold;
        color: #8E8D8D;
        background-color: ${backgroundColor};
        background: ${backgroundColor};
      }
      .tab_active:before {
        border-color: ${borderColor};
      }
      .splitpane_divider {
      	background-color: #CCCCCC !important;
      }
    `,
  });
};
