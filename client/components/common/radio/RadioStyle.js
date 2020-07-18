import { getBehaviourClasses } from '../checkbox/CheckboxStyle';

export default theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    marginLeft: '10px',
    cursor: 'pointer',
  },
  radio: {
    position: 'relative',
    width: '20px',
    height: '20px',
    outline: 'none',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      cursor: 'pointer',
      width: '20px',
      height: '20px',
      backgroundColor: 'white',
      border: theme.border,
      borderRadius: '50%',
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
      borderRadius: '50%',
    },
    ...getBehaviourClasses(theme),
    '&.focus': {
      ...getBehaviourClasses(theme)['&.focus'],
    },
  },
});
