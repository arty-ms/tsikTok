import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { USER_ICON, PRODUCT_ICON, CATEGORY_ICON } from './IconType';
import { getClassName } from '../../../utils/ClassUtils';
import ImagePlaceholder from '../../../assets/images/image_placeholder.jpg';

export const getIconByType = (type, className, classes, onClick) => {
  switch (type) {
    case USER_ICON:
      return <img
        className={`${className} ${classes.root}`}
        src='https://via.placeholder.com/300x300/73b84d/ffffff?Text=U'
        onClick={onClick}
      />;
    case PRODUCT_ICON:
      return <img
        className={`${className} ${classes.root}`}
        src={ImagePlaceholder}
        onClick={onClick}
      />;
    case CATEGORY_ICON:
      return <img
        className={`${className} ${classes.root}`}
        src={ImagePlaceholder}
        onClick={onClick}
      />;
    default:
      return null;
  }
};

export const styles = {
  root: {
    objectFit: 'contain',
  },
};

const Icon = ({
                src,
                type,
                className = '',
                classes,
                onClick = () => {},
              }) => {
  const [imageLoadFail, setImageLoadFail] = useState(false);
  const rootClasses = getClassName([
    classes.root,
    className,
  ]);

  if (!src || imageLoadFail) {
    return getIconByType(type, className, classes, onClick);
  }

  return <img
    src={src}
    className={rootClasses}
    onError={() => setImageLoadFail(true)}
    onClick={onClick}
  />;
};

Icon.propTypes = {
  src: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  classes: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  onClick: PropTypes.func,
};

export default withStyles(styles)(Icon);
