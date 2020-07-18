export const controlLabel = theme => ({
  color: theme.brandDarkGrayColor,
  fontSize: theme.controlFontSize,
  fontWeight: theme.controlFontWeight,
  marginBottom: '5px',
});

export const getBehaviourClasses = theme => ({
  outline: 'none',
  '&:disabled, &.disabled': {
    backgroundColor: theme.brandLightGrayColor,
  },
  '&.success': {
    color: theme.brandSuccessLightColor,
    borderColor: theme.brandSuccessLightColor,
    '&:placeholder': {
      color: theme.brandSuccessLightColor,
    },
  },
  '&.error': {
    color: theme.brandErrorLightColor,
    borderColor: theme.brandErrorLightColor,
    '&:placeholder': {
      color: theme.brandErrorLightColor,
    },
  },
  '&:focus, &.focus': {
    boxShadow: theme.focusBoxShadow,
  },
});

export default theme => ({
  rootWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
  },
  root: {
    height: theme.controlHeight,
    border: theme.border,
    borderRadius: theme.borderRadius,
    backgroundColor: 'transparent',
    outline: 'none',
    width: '100%',
    padding: '6px 10px',
    fontSize: theme.controlFontSize,
    fontWeight: theme.controlFontWeight,
    boxSizing: 'border-box',
    ...getBehaviourClasses(theme),
  },
  label: controlLabel(theme),
});
