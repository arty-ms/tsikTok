import {
  controlLabel,
  getBehaviourClasses,
} from '../input/InputComponentStyle';

export default theme => ({
  rootWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  root: {
    width: '100%',
    display: 'flex',
    border: theme.border,
    borderRadius: theme.borderRadius,
    height: theme.controlHeight,
    boxSizing: 'border-box',
    ...getBehaviourClasses(theme),
  },
  input: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    fontSize: theme.controlFontSize,
    fontWeight: theme.controlFontWeight,
    height: theme.controlHeight,
    boxSizing: 'border-box',
    padding: '4px 8px 6px 8px',
    width: '100%',
    cursor: 'pointer',
    outline: 'none',
    border: 'none',
    '&:placeholder': {
      color: theme.brandDarkGrayColor,
    },
    '&.success': {
      color: theme.brandSuccessLightColor,
      '&:placeholder': {
        color: theme.brandSuccessLightColor,
      },
    },
    '&.error': {
      color: theme.brandErrorLightColor,
      '&:placeholder': {
        color: theme.brandErrorLightColor,
      },
    },
  },
  iconWrapper: {
    width: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    '&.disabled': {
      cursor: 'default',
      backgroundColor: theme.brandLightGrayColor,
    },
  },
  label: controlLabel(theme),
});
