import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';

import routes from '../../common/routes';

import useStyles from './HeaderStyles';
import Card from '../common/card';
import Menu, { MenuItem } from '../common/menu';
import AuthorizationContext from '../../contexts/AuthorizationContext';
import MobileContext from '../../contexts/MobileContext';
import UserMenu from '../user-menu/UserMenu';
import { getClassName } from '../../utils/ClassUtils';

export const getMenuItems = (user) => {
  const isAdmin = user && user.roles.includes('admin');

  const defaultMenuItems = [{
    link: routes.main,
    label: 'MENU_ITEM_DEFAULT_MAIN',
  }, {
    link: routes.uploadVideo,
    label: 'MENU_ITEM_DEFAULT_UPLOAD_VIDEO',
  }];

  return defaultMenuItems;
};

export const getMenu = (user, { t, history }) => {
  const menuItems = getMenuItems(user);

  return (
    <Menu label={t('APPLICATION_TITLE')}>
      {(menuItems || []).map((menu, index) => (
        <MenuItem
          key={index}
          onClick={() => history.push(menu.link)}
          label={t(menu.label)}
        />
      ))}
    </Menu>
  );
};

const Header = (props) => {
  const {
    className,
    history,
  } = props;
  const { t } = useTranslation();
  const { isMobile } = useContext(MobileContext);
  const { user } = useContext(AuthorizationContext);
  const classes = useStyles();
  const rootClasses = getClassName([
    className,
    classes.root,
  ]);

  return (
    <header className={rootClasses}>
      <Card className={classes.card}>
        {getMenu(user, { t, isMobile, history })}
        <div className={classes.panels}>
          <UserMenu className={classes.userMenu}/>
        </div>
      </Card>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  history: PropTypes.object,
};

export default withRouter(Header);
