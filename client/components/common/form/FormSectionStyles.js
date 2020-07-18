export default theme => ({
  root: {
    padding: '5px',
    backgroundColor: 'white',
    boxSizing: 'border-box',
    position: 'relative',
    fontWeight: theme.controlFontWeight,
    '&:last-of-type': {
      marginBottom: 'none',
    },
    '&.size-1': {
      width: '8.3%',
      flexBasis: '8.3%',
    },
    '&.size-2': {
      width: '16.6%',
      flexBasis: '16.6%',
    },
    '&.size-3': {
      width: '25%',
      flexBasis: '25%',
    },
    '&.size-4': {
      width: '33%',
      flexBasis: '33%',
    },
    '&.size-5': {
      width: '41.6%',
      flexBasis: '41.6%',
    },
    '&.size-6, &.size-half': {
      width: '50%',
      flexBasis: '50%',
    },
    '&.size-7': {
      width: '58.3%',
      flexBasis: '58.3%',
    },
    '&.size-8': {
      width: '66.6%',
      flexBasis: '66.6%',
    },
    '&.size-9': {
      width: '75%',
      flexBasis: '75%',
    },
    '&.size-10': {
      width: '83%',
      flexBasis: '83%',
    },
    '&.size-11': {
      width: '91.6%',
      flexBasis: '91.6%',
    },
    '&.size-12, &.size-full': {
      width: '100%',
      flexBasis: '100%',
    },
  },
  title: {
    margin: '5px 0',
    fontSize: '18px',
  },
  children: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    '& > *': {
      marginTop: '10px',
      '&:first-of-type': {
        marginLeft: '0',
      },
    },
  },
});
