import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

export const DropdownItemSeparatorStyle = theme => ({
  root: {
    margin: '10px 0',
    borderTop: theme.border,
  },
});

const OptionItemSeparator = ({classes}) => <div className={classes.root}/>;

OptionItemSeparator.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(DropdownItemSeparatorStyle)(OptionItemSeparator);
