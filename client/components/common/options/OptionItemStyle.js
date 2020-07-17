import { getBehaviourClasses } from '../button/ButtonStyle';

export default theme => ({
  root: {
    listStyle: 'none',
  },
  label: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'baseline',
    padding: '8px 10px',
    cursor: 'pointer',
    transition: theme.backgroundColorTransition,
    outline: 'none',
    color: theme.fontColor,
    textDecoration: 'none',
    fontWeight: theme.fontWeight,
    ...getBehaviourClasses(theme),
    '&:focus': {
      border: `1px solid ${theme.brandPrimaryColor}`,
      borderRadius: theme.borderRadius,
      padding: '7px 9px',
    },
    '&:hover': {
      backgroundColor: theme.brandPrimaryColor,
    },
    '&.disabled': {
      cursor: 'initial',
      backgroundColor: theme.brandLightGrayColor,
      '&:hover': {
        backgroundColor: theme.brandLightGrayColor,
      },
    },
    '&.primary': {
      backgroundColor: 'transparent',
    },
    '&.primary:hover': {
      color: theme.buttonTextColor,
      backgroundColor: theme.brandPrimaryColor,
    },
    '&.secondary': {
      backgroundColor: 'transparent',
    },
    '&.secondary:hover': {
      color: theme.buttonTextColor,
    },
    '&.success': {
      backgroundColor: '#FFFFFF',
    },
    '&.success:hover': {
      color: theme.buttonTextColor,
      backgroundColor: theme.brandSuccessLightColor,
    },
    '&.warning': {
      backgroundColor: '#FFFFFF',
    },
    '&.warning:hover': {
      color: theme.buttonTextColor,
      backgroundColor: theme.brandWarningLightColor,
    },
    '&.info': {
      backgroundColor: '#FFFFFF',
    },
    '&.info:hover': {
      color: theme.buttonTextColor,
      backgroundColor: theme.brandInfoLightColor,
    },
    '&.danger': {
      backgroundColor: '#FFFFFF',
    },
    '&.danger:hover': {
      color: theme.buttonTextColor,
      backgroundColor: theme.brandErrorLightColor,
    },
  },
  description: {
    fontSize: '14px',
    fontWeight: theme.fontWeight,
  },
});
