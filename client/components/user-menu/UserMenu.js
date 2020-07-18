import React, { useState, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Avatar from '../common/avatar';
import Button from '../common/button';
import Backdrop from '../common/Backdrop';
import Options, { OptionItem, OptionItemSeparator } from '../common/options';
import AuthorizationContext from '../../contexts/AuthorizationContext';
import useStyle from './UserMenuStyle';
import { getClassName } from '../../utils/ClassUtils';

const UserMenu = (props) => {
  const { className, history } = props;
  const { t } = useTranslation();
  const { user } = useContext(AuthorizationContext);
  const classes = useStyle();
  const [isOpen, setOpen] = useState(false);
  const rootClasses = getClassName([
    classes.root,
    className,
  ]);

  const options = useMemo(() => user ?[{
    link: '/profile/details',
    label: 'MENU_ITEM_USER_PROFILE',
  }, {
    link: '/sign-out',
    label: 'MENU_ITEM_SIGN_OUT',
    separator: true,
  }] : [], [user]);

  const onOptionClick = (option) => {
    history.push(option.link);
    setOpen(false);
  };

  if (!user) {
    return (
      <div className={rootClasses}>
        <div className={classes.buttonsPanel}>
          <Button
            className={classes.buttonsPanelButton}
            onClick={() => history.push('/sign-in')}
          >
            {t('MENU_ITEM_SIGN_IN')}
          </Button>
          <Button
            className={classes.buttonsPanelButton}
            onClick={() => history.push('/sign-up')}
          >
            {t('MENU_ITEM_SIGN_UP')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={rootClasses}>
      <div className={classes.userName}
           onClick={() => setOpen(true)}
      >
        {user.firstName} {user.lastName}
      </div>
      <Avatar
        size='sm'
        className={classes.avatar}
        url={user.avatarUrl}
        onClick={() => setOpen(true)}
      />
      {isOpen && <>
        <Options className={classes.options} type={classes.optionsList}>
          {(options || []).map(option => (
            <>
              { option.separator && <OptionItemSeparator/> }
              <OptionItem
                label={t(option.label)}
                onClick={() => onOptionClick(option)}
              />
            </>
          ))}
        </Options>
        <Backdrop onClick={() => setOpen(false)}/>
      </>}
    </div>
  );
};

UserMenu.propTypes = {
  history: PropTypes.object,
  className: PropTypes.string,
};

export default withRouter(UserMenu);
