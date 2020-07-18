import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { createUUID } from '../utils/uuid';
import ModalDialog from '../components/common/modal-dialog';

const ModalDialogContext = React.createContext(null);

export const HIDE_ANIMATION_TIME = 300;

const useStyles = createUseStyles((theme) => ({
  root: {
    position: 'relative',
  },
}));

export const AppWithModalDialog = (props) => {
  const classes = useStyles();
  const [modals, setModals] = useState([]);

  const showModalDialog = (modalData) => {
    const id = createUUID();
    const modal = {
      ...modalData,
      hide: false,
      id,
    };

    setModals([...modals, modal]);

    return id;
  };

  const removeModalDialog = (id) => {
    setModals((state) => (state || []).filter(modal => modal.id !== id));
  };

  const hideModalDialog = (id) => {
    setModals((state) => (state || []).map(modal => {
      if (modal.id === id) {
        setTimeout(() => removeModalDialog(id), HIDE_ANIMATION_TIME);

        return {
          ...modal,
          hide: true,
        };
      }

      return modal;
    }));
  };

  return (
    <ModalDialogContext.Provider value={{
      showModalDialog,
      hideModalDialog,
    }}>
      {props.children}
      <div className={classes.root}>
        {(modals || []).map((modal) => (
          <ModalDialog
            key={modal.id}
            hide={modal.hide}
            title={modal.title}
            {...modal.props}
            onClose={() => hideModalDialog(modal.id)}
          >
            {modal.body}
          </ModalDialog>
        ))}
      </div>
    </ModalDialogContext.Provider>
  );
};

AppWithModalDialog.propTypes = {
  children: PropTypes.node,
};

export default ModalDialogContext;
