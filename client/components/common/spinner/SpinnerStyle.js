export default theme => ({
  root: {
    display: 'inline-block',
    '&:after': {
      content: '" "',
      display: 'block',
      margin: '1px',
      borderRadius: '50%',
      border: `5px solid ${theme.brandPrimaryColor}`,
      borderColor: `${theme.brandPrimaryColor} transparent`,
      animation: 'lds-dual-ring 1.2s linear infinite',
    },
    '&.sm': {
      width: '22px',
      height: '22px',
      '&:after': {
        width: '16px',
        height: '16px',
        borderWidth: '3px',
      },
    },
    '&.md': {
      width: '75px',
      height: '75px',
      '&:after': {
        width: '64px',
        height: '64px',
        borderWidth: '5px',
      },
    },
    '&.lg': {
      width: '150px',
      height: '150px',
      '&:after': {
        width: '128px',
        height: '128px',
        borderWidth: '10px',
      },
    },
    '&.primary': {
      '&:after': {
        borderColor: `${theme.brandPrimaryColor} transparent`,
      },
    },
    '&.secondary': {
      '&:after': {
        borderColor: `${theme.brandDarkGrayColor} transparent`,
      },
    },
    '&.success': {
      '&:after': {
        borderColor: `${theme.brandSuccessDarkColor} transparent`,
      },
    },
    '&.info': {
      '&:after': {
        borderColor: `${theme.brandInfoDarkColor} transparent`,
      },
    },
    '&.warning': {
      '&:after': {
        borderColor: `${theme.brandWarningDarkColor} transparent`,
      },
    },
    '&.danger': {
      '&:after': {
        borderColor: `${theme.brandErrorDarkColor} transparent`,
      },
    },
  },
  '@global': {
    '@keyframes lds-dual-ring': {
      '0%': {
        transform: 'rotate(0deg)',
      },
      '100%': {
        transform: 'rotate(360deg)',
      },
    },
  },
});
