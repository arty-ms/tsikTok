export default theme => ({
  root: {
    position: 'fixed',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: theme.border,
    borderRadius: theme.borderRadius,
    fontWeight: theme.fontWeight,
    boxShadow: theme.boxShadow,
    width: '400px',
    minHeight: '50px',
    zIndex: '1',
    opacity: '1',
    transition: 'opacity linear 150ms',
    '&.tl': {
      top: '0',
      left: '0',
      margin: '10px 0 0 10px',
    },
    '&.tc': {
      top: '0',
      left: 'calc(50% - 200px)',
      right: 'calc(50% - 200px)',
      margin: '10px 0 0 0',
    },
    '&.tr': {
      top: '0',
      right: '0',
      margin: '10px 10px 0 0',
    },
    '&.cl': {
      top: 'calc(50% - 100px)',
      left: '0',
      margin: '0 0 10px 0',
    },
    '&.cc': {
      top: 'calc(50% - 100px)',
      left: 'calc(50% - 200px)',
      right: '0',
      margin: '0',
    },
    '&.cr': {
      top: 'calc(50% - 100px)',
      right: '0',
      margin: '0 10px 0 0',
    },
    '&.bl': {
      bottom: '0',
      left: '0',
      margin: '0 0 10px 10px',
    },
    '&.bc': {
      bottom: '0',
      left: 'calc(50% - 200px)',
      right: 'calc(50% - 200px)',
      margin: '0 0 10px 0',
    },
    '&.br': {
      bottom: '0',
      right: '0',
      margin: '0 10px 10px 0',
    },
    '&.hide': {
      opacity: '0',
    },
    '&.success': {
      backgroundColor: theme.brandSuccessLightColor,
      borderColor: theme.brandSuccessDarkColor,
    },
    '&.info': {
      backgroundColor: theme.brandInfoLightColor,
      borderColor: theme.brandInfoDarkColor,
    },
    '&.warning': {
      backgroundColor: theme.brandWarningLightColor,
      borderColor: theme.brandWarningDarkColor,
    },
    '&.error': {
      backgroundColor: theme.brandErrorLightColor,
      borderColor: theme.brandErrorDarkColor,
    },
    '&.mobile': {
      width: '300px',
    },
  },
  closeIcon: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
  },
});
