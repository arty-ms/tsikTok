export default theme => ({
  root: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    height: '22px',
    transition: 'border linear 100ms',
    borderColor: 'white',
    outline: 'none',
    '&.selected, &:hover, &:focus': {
      borderBottom: `2px solid ${theme.brandPrimaryColor}`,
    },
    '&.disabled': {
      cursor: 'default',
      color: theme.brandDarkGrayColor,
      '&:hover': {
        borderBottom: 'none',
      },
      '&.selected': {
        borderBottom: `2px solid ${theme.brandDarkGrayColor}`,
      },
    },
  },
  mark: {
    position: 'absolute',
    top: '1px',
    right: '0',
    width: '5px',
    height: '5px',
    borderRadius: '50%',
    backgroundColor: theme.brandPrimaryColor,
  },
});
