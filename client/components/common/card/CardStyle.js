export default theme => ({
  root: {
    borderRadius: theme.borderRadius,
    boxShadow: theme.boxShadow,
    backgroundColor: '#FFFFFF',
    '&.transparent': {
      border: 'none',
      boxShadow: 'none',
      padding: '0',
    },
  },
});
