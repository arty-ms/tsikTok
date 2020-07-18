export default theme => ({
  optionsWrapper: {
    position: 'relative',
  },
  options: {
    position: 'absolute',
    top: '3px',
    left: '0',
    width: 'calc(100% - 2px)',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '240px',
    border: theme.border,
    borderRadius: theme.borderRadius,
    backgroundColor: '#FFFFFF',
    overflow: 'auto',
    zIndex: '1',
    padding: '10px 0',
    boxShadow: theme.boxShadow,
    '&::-webkit-scrollbar ': {
      width: '6px',
    },
    '&::-webkit-scrollbar-track': {
      borderRadius: theme.borderRadius,
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#ddd',
      borderRadius: theme.borderRadius,
      backgroundColor: theme.brandPrimaryColor,
    },
    '&.success::-webkit-scrollbar-thumb': {
      backgroundColor: theme.brandSuccessLightColor,
    },
    '&.danger::-webkit-scrollbar-thumb': {
      backgroundColor: theme.brandErrorLightColor,
    },
    margin: '0',
  },
});
