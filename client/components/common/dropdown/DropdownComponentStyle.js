import { getButtonStyles, getBehaviourClasses } from '../button/ButtonStyle';

export default theme => ({
  rootWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  root: {
    display: 'flex',
    width: '100%',
    border: theme.border,
    borderRadius: theme.borderRadius,
    ...getBehaviourClasses(theme),
  },
  button: {
    ...getButtonStyles(theme),
    padding: '6px 0 6px 10px',
    width: '100%',
    justifyContent: 'flex-start',
    textAlign: 'left',
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    borderRadius: '0',
    color: 'inherit',
  },
  iconWrapper: {
    width: '30px',
    paddingRight: '5px',
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    '& path': {
      fill: theme.defaultIconColor,
    },
    '&.separate': {
      borderLeft: theme.border,
    },
    '&.disabled': {
      cursor: 'default',
    },
  },
});
