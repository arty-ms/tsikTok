export const getBehaviourClasses = theme => ({
  outline: 'none',
  '&.mobile': {
    minWidth: 'initial',
  },
  '&.primary': {
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
  '&.secondary': {
    backgroundColor: 'transparent',
    borderColor: theme.brandPrimaryDarkColor,
  },
  '&.secondary:hover': {
    color: theme.buttonTextColor,
    borderColor: theme.brandPrimaryDarkColor,
    backgroundColor: theme.brandPrimaryColor,
  },
  '&.success': {
    color: theme.buttonTextColor,
    borderColor: theme.brandSuccessDarkColor,
    backgroundColor: theme.brandSuccessLightColor,
    '& path': {
      fill: theme.hoverIconColor,
    },
  },
  '&.success:hover': {
    backgroundColor: theme.brandSuccessDarkColor,
  },
  '&.warning': {
    color: theme.buttonTextColor,
    borderColor: theme.brandWarningDarkColor,
    backgroundColor: theme.brandWarningLightColor,
    '& path': {
      fill: theme.hoverIconColor,
    },
  },
  '&.warning:hover': {
    backgroundColor: theme.brandWarningDarkColor,
  },
  '&.info': {
    color: theme.buttonTextColor,
    borderColor: theme.brandInfoDarkColor,
    backgroundColor: theme.brandInfoLightColor,
    '& path': {
      fill: theme.hoverIconColor,
    },
  },
  '&.info:hover': {
    backgroundColor: theme.brandInfoDarkColor,
  },
  '&.danger': {
    color: theme.buttonTextColor,
    borderColor: theme.brandErrorDarkColor,
    backgroundColor: theme.brandErrorLightColor,
    '& path': {
      fill: theme.hoverIconColor,
    },
  },
  '&.danger:hover': {
    backgroundColor: theme.brandErrorDarkColor,
  },
  '&.link': {
    border: 'none',
    backgroundColor: 'none',
    color: theme.brandLinkLightColor,
  },
  '&.link:hover': {
    border: 'none',
    backgroundColor: 'none',
    color: theme.brandLinkDarkColor,
  },
  '&.transparent': {
    border: 'none',
    backgroundColor: 'none',
  },
  '&.transparent:hover': {
    border: 'none',
    backgroundColor: 'none',
    color: theme.brandPrimaryColor,
  },
  '&:disabled, &:disabled:hover, &.disabled, &.disabled:hover': {
    cursor: 'default',
    color: 'initial',
    borderColor: theme.brandGrayColor,
    backgroundColor: theme.brandLightGrayColor,
  },
  '&:focus, &.focus': {
    boxShadow: theme.focusBoxShadow,
  },
  '&:hover path': {
    fill: theme.hoverIconColor,
  },
  '&.disabled path': {
    fill: theme.defaultIconColor,
  },
});

export const getButtonStyles = theme => ({
  minHeight: theme.controlHeight,
  border: theme.border,
  borderRadius: theme.borderRadius,
  cursor: 'pointer',
  transition: theme.backgroundColorTransition,
  minWidth: '80px',
  fontSize: theme.controlFontSize,
  fontWeight: theme.controlFontWeight,
  padding: '5px 7px',
  boxSizing: 'border-box',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export default theme => ({
  root: {
    ...getButtonStyles(theme),
    ...getBehaviourClasses(theme),
  },
  spinner: {
    marginLeft: '5px',
  },
});
