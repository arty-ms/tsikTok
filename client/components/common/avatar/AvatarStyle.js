export default {
  root: {
    display: 'inline-box',
    position: 'relative',
    cursor: 'pointer',
  },
  image: {
    borderRadius: '50%',
    objectFit: 'contain',
    '&.lg': {
      width: '150px',
      height: '150px',
    },
    '&.md': {
      width: '100px',
      height: '100px',
    },
    '&.sm': {
      width: '50px',
      height: '50px',
    },
    '&.xs': {
      width: '25px',
      height: '25px',
    },
    '&.square': {
      borderRadius: '0',
    },
  },
};
