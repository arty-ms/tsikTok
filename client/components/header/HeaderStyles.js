import { createUseStyles } from 'react-jss';

export default createUseStyles((theme) => ({
  root: {
    width: '100%',
  },
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '55px',
    padding: '5px',
  },
  basketPanel: {
    marginLeft: '20px',
  },
  notificationPanel: {
    marginLeft: '20px',
  },
  userMenu: {
    marginLeft: '20px',
  },
  panels: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    margin: '0 20px 0 0',
  },
}));
