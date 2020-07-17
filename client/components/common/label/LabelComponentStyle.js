export default theme => ({
  root: {
    fontSize: theme.controlFontSize,
    fontWeight: theme.controlFontWeight,
    '&.success': {
      color: theme.brandSuccessDarkColor,
    },
    '&.error': {
      color: theme.brandErrorDarkColor,
    },
    '&.disabled': {
      cursor: 'default',
      color: theme.brandDarkGrayColor,
    },
  },
});
