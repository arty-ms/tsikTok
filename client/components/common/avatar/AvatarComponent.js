import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import AvatarStyles from './AvatarStyle';
import Icon from '../icon';
import { getClassName } from '../../../utils/ClassUtils';

const Avatar = (props) => {
  const {
    className,
    classes,
    url,
    size = 'md',
    square = false,
    onClick = () => {},
  } = props;

  const rootClasses = getClassName([
    classes.root,
    className,
  ]);
  const imgClassNames = getClassName([
    classes.image,
    size,
    square ? 'square' : '',
  ]);

  return (
    <div className={rootClasses}>
      <Icon
        className={imgClassNames}
        src={url}
        type={'USER_ICON'}
        onClick={onClick}
      />
    </div>
  );
};

Avatar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  square: PropTypes.bool,
  url: PropTypes.string,
  size: PropTypes.oneOf(['lg', 'md', 'sm', 'xs']),
  onClick: PropTypes.func,
};

export default withStyles(AvatarStyles)(Avatar);
