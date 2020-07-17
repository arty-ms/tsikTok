import { createUseStyles } from 'react-jss';

export default createUseStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  avatar: {
    marginLeft: '10px',
  },
  userName: {
    cursor: 'pointer',
  },
  options: {
    right: '190px',
    top: '28px',
    zIndex: '2',
  },
  optionsList: {
    width: '200px',
    maxHeight: '250px',
  },
  buttonsPanel: {
    display: 'flex',
  },
  buttonsPanelButton: {
    marginLeft: '10px',
    '&:first-of-type': {
      marginLeft: '0',
    },
  },
}));
