import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getClassName } from '../../../utils/ClassUtils';
import SliderStyle from './SliderStyle';
import Icon from '../icon';
import Button from '../button';

const Slider = ({images, alt, classes = {}, className = ''}) => {
  const [index, setIndex] = useState(0);
  const currentImage = images[index];
  let sliderOutput;

  const rootClasses = getClassName([
    classes.root,
    className,
  ]);

  const handlePrevClick = () => {
    if (index < images.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const handleNextClick = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(images.length - 1);
    }
  };

  if (images.length > 1) {
    sliderOutput = (
      <>
        <Button className={classes.button} onClick={handlePrevClick}>
          <FontAwesomeIcon className={classes.arrow} icon='chevron-left'/>
        </Button>
        <div className={classes.imageContainer}>
          <Icon className={classes.image} src={currentImage} alt={alt}
                type={'PRODUCT_ICON'}/>
        </div>
        <Button onClick={handleNextClick}>
          <FontAwesomeIcon className={classes.arrow} icon='chevron-right'/>
        </Button>
      </>
    );
  } else {
    sliderOutput = (
      <div className={classes.imageContainer}>
        <Icon className={classes.image} src={currentImage} alt={alt}
              type={'PRODUCT_ICON'}/>
      </div>
    );
  }

  return (
    <div className={rootClasses}>
      {sliderOutput}
    </div>
  );
};

Slider.propTypes = {
  images: PropTypes.array,
  alt: PropTypes.string,
  className: PropTypes.string,
  classes: PropTypes.object,
};

export default withStyles(SliderStyle)(Slider);
