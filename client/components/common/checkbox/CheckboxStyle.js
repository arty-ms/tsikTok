export const getBehaviourClasses = theme => ({
  '&.checked:before': {
    borderColor: theme.brandPrimaryDarkColor,
  },
  '&.checked:after': {
    borderColor: theme.brandPrimaryDarkColor,
    backgroundColor: theme.brandPrimaryColor,
  },
  '&:disabled:before, &:disabled:after': {
    cursor: 'default',
    backgroundColor: theme.brandLightGrayColor,
  },
  '&:disabled.checked:before': {
    cursor: 'default',
    border: theme.border,
    backgroundColor: 'white',
  },
  '&:disabled.checked:after': {
    cursor: 'default',
    backgroundColor: theme.brandLightGrayColor,
  },
  '&.focus:before': {
    borderColor: theme.brandPrimaryDarkColor,
  },
});

export default theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    marginLeft: '10px',
    cursor: 'pointer',
  },
  checkbox: {
    position: 'relative',
    width: '20px',
    height: '20px',
    outline: 'none',
    backgroundColor: 'transparent',
    '&:before': {
      content: '""',
      position: 'absolute',
      cursor: 'pointer',
      width: '20px',
      height: '20px',
      backgroundColor: 'white',
      border: theme.border,
      borderRadius: theme.checkboxBorderRadius,
    },
    '&:after': {
      content: '""',
      top: '3px',
      left: '3px',
      position: 'absolute',
      cursor: 'pointer',
      width: '16px',
      height: '16px',
      transition: theme.backgroundColorTransition,
      backgroundColor: 'white',
      borderRadius: theme.checkboxBorderInnerRadius,
    },
    ...getBehaviourClasses(theme),
  },
});
