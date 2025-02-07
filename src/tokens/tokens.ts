// AUTO-GENERATED CONTENT - DO NOT MANUALLY EDIT - Run 'generate:design-tokens' to update

const tokens = {
  sizing: { small: '28px', medium: '36px', large: '48px' },
  spacing: {
    xsmall: '4px',
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '32px',
    xxlarge: '64px',
  },
  colors: {
    navyLight: '#213147',
    navy: '#05192D',
    navyDark: '#000820',
    navySubtleTextOnDark: '#9BA3AB',
    navySubtleTextOnLight: '#65707C',
    greenLight: '#65FF8F',
    green: '#03EF62',
    greenDark: '#00C74E',
    greenDarkText: '#008031',
    white: '#FFFFFF',
    greySubtle: '#F7F7FC',
    greyLight: '#EFEFEF',
    grey: '#E8E8EA',
    greyMedium: '#D9D9E2',
    greyDark: '#848C92',
    beigeSubtle: '#FFFBF3',
    beigeLight: '#F7F3EB',
    beige: '#EFEBE4',
    beigeMedium: '#E5E1DA',
    redLight: '#FF782D',
    red: '#FF5400',
    redDark: '#DD3400',
    redDarkText: '#C01100',
    orangeLight: '#FFBC4B',
    orange: '#FF931E',
    orangeDark: '#D87300',
    orangeDarkText: '#B75900',
    yellowLight: '#FFEC3C',
    yellow: '#FCCE0D',
    yellowDark: '#CFA600',
    yellowDarkText: '#907000',
    blueLight: '#60E7FF',
    blue: '#06BDFC',
    blueDark: '#009BD8',
    blueDarkText: '#0075AD',
    purpleLight: '#974DFF',
    purple: '#7933FF',
    purpleDark: '#5646A5',
    purpleDarkText: '#5646A5',
    pinkLight: '#FF95CF',
    pink: '#FF6EA9',
    pinkDark: '#DC4D8B',
    pinkDarkText: '#BF3072',
    brandFacebook: '#1778F2',
    brandTwitter: '#00ACEE',
    brandGoogle: '#DB4437',
    brandLinkedIn: '#0A66C2',
  },
  borderRadius: { medium: '4px', circle: '50%' },
  borderWidth: { thin: '1px', medium: '2px', thick: '3px', xthick: '4px' },
  boxShadow: {
    thin: '0px 0px 2px 0px rgba(5, 25, 45, 0.3)',
    medium: '0px 1px 4px -1px rgba(5, 25, 45, 0.3)',
    thick: '0px 3px 5px -1px rgba(5, 25, 45, 0.3)',
    xthick: '0px 8px 12px -4px rgba(5, 25, 45, 0.3)',
  },
  fontWeights: { regular: 400, bold: 800 },
  fontFamilies: {
    sansSerif: 'Studio-Feixen-Sans, Arial, sans-serif',
    mono: "JetBrainsMonoNL, Menlo, Monaco, 'Courier New', monospace",
  },
  fontSizes: {
    xsmall: '10px',
    small: '12px',
    medium: '14px',
    large: '16px',
    xlarge: '18px',
    xxlarge: '20px',
    huge: '28px',
  },
  letterSpacing: { tight: '-0.5px', default: '0px', relaxed: '1.5px' },
  lineHeights: { tight: 1, default: 1.25, relaxed: 1.5 },
  opacity: { low: 0.1, medium: 0.4, high: 0.6 },
  zIndex: {
    default: 1,
    sticky: 100,
    popup: 5000,
    dropdown: 7000,
    overlay: 8000,
    modal: 9000,
    toast: 10000,
  },
  breakpoints: { small: '480px', medium: '820px', large: '1480px' },
} as const;

export default tokens;
