import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../card';
import Label from '../label';
import Backdrop from '../Backdrop';
import useStyles from './ModalDialogStyle';
import { getClassName } from '../../../utils/ClassUtils';

const ModalDialog = (props) => {
  const {
    className = '',
    title = '',
    hide = false,
    children,
    onClose,
  } = props;

  const {t} = useTranslation();
  const classes = useStyles({hide});
  const rootClasses = getClassName([
    className,
    classes.root,
  ]);

  return (
    <>
      <Card className={rootClasses}>
        <div className={classes.modalHeader}>
          <Label
            className={classes.title}
            value={t(title)}
          />
          <FontAwesomeIcon
            icon='times'
            onClick={onClose}
            className={classes.closeIcon}
          />
        </div>
        <div className={classes.modalBody}>
          {children}
        </div>
      </Card>
      <Backdrop onClick={onClose} className={classes.backdrop}/>
    </>
  );
};

ModalDialog.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  hide: PropTypes.bool,
  children: PropTypes.node,
  onClose: PropTypes.func,
};

export default ModalDialog;
