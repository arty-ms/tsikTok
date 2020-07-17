import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { getClassName } from '../../../utils/ClassUtils';
import TabsBodyStyle from './TabsBodyStyle';
import Card from '../card';

const TabsBodyComponent = (props) => {
  const {
    classes,
    children,
    className,
  } = props;

  const classNames = getClassName([
    classes.root,
    className,
  ]);

  return (
    <ul className={classNames}>
      {children}
    </ul>
  );
};

TabsBodyComponent.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default withStyles(TabsBodyStyle)(TabsBodyComponent);
