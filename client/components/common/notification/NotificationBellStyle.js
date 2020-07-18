export default theme => ({
  root: {
    position: 'relative',
    cursor: 'pointer',
  },
  icon: {},
  marked: {
    position: 'absolute',
    top: '-10px',
    right: '-10px',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    backgroundColor: theme.brandPrimaryColor,
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
