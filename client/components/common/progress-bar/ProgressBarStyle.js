export default theme => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '25px',
    border: theme.border,
    borderRadius: theme.borderRadius,
  },
  progress: {
    // eslint-disable-next-line max-len
    backgroundImage: 'linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)',
    backgroundSize: '1rem 1rem',
    animation: 'progress-bar-stripes 2s linear infinite',
    '&.primary': {
      backgroundColor: theme.brandPrimaryColor,
    },
    '&.secondary': {
      backgroundColor: theme.brandLightGrayColor,
    },
    '&.success': {
      backgroundColor: theme.brandSuccessLightColor,
    },
    '&.info': {
      backgroundColor: theme.brandInfoLightColor,
    },
    '&.warning': {
      backgroundColor: theme.brandWarningLightColor,
    },
    '&.danger': {
      backgroundColor: theme.brandErrorDarkColor,
    },
    borderRadius: theme.borderRadius,
  },
  '@global': {
    '@keyframes progress-bar-stripes': {
      from: {
        backgroundPosition: '40px 0',
      },
      to: {
        backgroundPosition: '0 0',
      },
    },
  },
});
