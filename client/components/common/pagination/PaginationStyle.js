import { createUseStyles } from 'react-jss';

export default createUseStyles((theme) => ({
  root: {
    borderTop: '1px solid #dadada',
    margin: '0',
    padding: '30px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& li': {
      listStyle: 'none',
      '& a': {
        cursor: 'pointer',
        padding: '10px',
        border: theme.border,
        borderRadius: theme.borderRadius,
        margin: '5px',
        backgroundColor: '#ffffff',
        outline: 'none',
        '&:hover': {
          color: '#ffffff',
          backgroundColor: theme.brandPrimaryColor,
          borderColor: theme.brandPrimaryDarkColor,
        },
      },
    },
    border: theme.border,
    borderRadius: theme.borderRadius,
  },
  subContainer: {},
  active: {
    '& a': {
      color: '#ffffff !important',
      backgroundColor: `${theme.brandPrimaryDarkColor} !important`,
      borderColor: `${theme.brandPrimaryDarkColor} !important`,
    },
  },
  break: {},
}));
