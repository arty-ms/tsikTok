import { createUseStyles } from 'react-jss';

export default createUseStyles((theme) => ({
  root: {
    maxWidth: '600px',
    width: '100%',
    position: 'fixed',
    top: '200px',
    left: 'calc(50% - 300px)',
    zIndex: '3',
    transform: 'translateX(-1500px)',
    animation: ({hide}) => (hide
        ? 'roadRunnerOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards'
        : 'roadRunnerIn 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards'
    ),
  },
  modalBody: {
    padding: '20px',
  },
  modalHeader: {
    position: 'relative',
    height: '32px',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '24px',
  },
  closeIcon: {
    cursor: 'pointer',
  },
  backdrop: {
    background: 'rgba(0, 0, 0, 0.3)',
    animation: 'fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards',
  },
}));
