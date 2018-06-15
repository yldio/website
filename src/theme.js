import BuildArray from 'build-array';
import remcalc from 'remcalc';

export default () => ({
  colors: {
    midnightblue: '#190533',
    darkslategrey: '#433a4f',
    slateblue: '#5E5CB2',
    deeppink: '#E60073',
    thistle: '#B4AFC8',
    lavender: '#DCD9EA',
    white: '#FFFFFF'
  },
  flexboxgrid: {
    gridSize: 12, // Columns
    gutterWidth: 2, // Rem
    outerMargin: 2, // Rem
    mediaQuery: 'only screen',
    container: {
      sm: 30, // Rem
      md: 45, // Rem
      lg: 64 // Rem
    },
    breakpoints: {
      xs: 0, // Em
      sm: 30, // Em
      md: 45, // Em
      lg: 64 // Em
    }
  },
  breakpoints: {
    xs: 0,
    sm: 480,
    md: 720,
    lg: 1024,
    xl: 1280
  },
  spacing: BuildArray(200).reduce(
    (sum, _, i) => ({
      ...sum,
      [`${i}`]: remcalc(i * 2),
      [`-${i}`]: remcalc(-(i * 2))
    }),
    {}
  )
});
