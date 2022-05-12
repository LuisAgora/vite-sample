type Size = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

const sizes: Record<Size, string> = {
  xxs: '400px',
  xs: '480px',
  sm: '600px',
  md: '768px',
  lg: '900px',
  xl: '1024px',
  xxl: '1400px'
};

export const theme = {
  fontFamily: 'Arboria',
  font: {
    size: {
      xs: '0.6875rem',
      sm: '0.75rem',
      base: '0.9375rem',
      lg: '1rem',
      xl: '1.25rem',
      xxl: '1.4375rem'
    },
    weight: {
      light: '300',
      book: '400',
      medium: '500',
      bold: '700',
      black: '900'
    }
  },
  rounded: {
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem'
  },
  colors: {
    black: '#212121',
    white: '#fff',
    red: '#FF4658',
    lightRed: '#FF9CA5',
    blue: '#0072FF',
    lightBlue: '#0072FF',
    skyBlue: '#00CDFF',
    lightSkyBlue: '#75E1FF',
    yellow: '#FFE066',
    lightYellow: '#FFF3BE',
    green: '#0AD6A1',
    lightGreen: '#A8FFE7',
    darkGrey: '#505050',
    grey: '#626262',
    lightGrey: '#868686',
    lighterGrey: '#dadbdd',
    lightestGrey: '#e9e9e9',
    info: '#0072FF',
    warning: '#FFE066',
    progressBar: '#CECECE',
    danger: '#FF4658'
  },
  shadow: {
    sm: '0 1px 2px rgba(0,0,0,0.05), 0 1px 1px rgba(0, 0, 0, 0.07)',
    md: '0 1px 2px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.06)',
    lg: '0 4px 3px rgba(0, 0, 0, 0.07), 0 2px 2px rgba(0, 0, 0, 0.06)',
    xl: '0 20px 13px rgba(0, 0, 0, 0.03), 0 8px 5px rgba(0, 0, 0, 0.08)'
  },
  breakpoint: (size: Size): string => `@media (max-width: ${sizes[size]})`,
  navbar: {
    desktop: {
      home: {
        background: 'transparent',
        font: '#fff'
      },
      noHome: {
        background: '#fff',
        font: '#212121'
      }
    },
    dropdown: {
      background: '#fff',
      font: '#212121'
    },
    mobile: {
      background: '#fff',
      font: '#212121',
      secFont: '#868686'
    }
  }
};

export type ThemeType = typeof theme;
