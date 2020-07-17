export default (theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  '&.button': {
    color: theme.buttonTextColor,
    borderColor: theme.brandPrimaryDarkColor,
    backgroundColor: theme.brandPrimaryColor,
    '& path': {
      fill: theme.hoverIconColor,
    },
  },
  '&.primary:hover': {
    backgroundColor: theme.brandPrimaryDarkColor,
  },
})
