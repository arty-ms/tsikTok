import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import withStyle from 'react-jss';
import MobileContext from '../../../contexts/MobileContext';
import ButtonStyle from './ButtonStyle';
import Tooltip from '../tooltip';
import Spinner from '../spinner';

const ButtonComponent = (props) => {
  const {
    classes,
    type = 'secondary',
    children,
    onClick = () => {},
    className = '',
    disabled = false,
    tooltip = '',
    spin = false,
  } = props;
  const {isMobile} = useContext(MobileContext);
  const [isHovered, setHoveredState] = useState(false);

  return (
    <>
      <Tooltip label={tooltip} show={isHovered}/>
      <button
        className={`${classes.root} ${className} ${type} ${isMobile
          ? 'mobile'
          : ''}`}
        disabled={disabled}
        onClick={(e) => {
          e.stopPropagation();

          if (disabled) {
            return;
          }

          onClick();
        }}
        onMouseEnter={() => setHoveredState(true)}
        onMouseLeave={() => setHoveredState(false)}
        onKeyPress={(e) => {
          e.stopPropagation();

          if (e.key === 'Enter') {
            onClick();
          }
        }}
      >
        {children}
        {spin && <Spinner
          className={classes.spinner}
          type={type}
          size='sm'/>
        }
      </button>
    </>
  );
};

ButtonComponent.propTypes = {
  classes: PropTypes.object,
  type: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
    'link',
    'transparent',
  ]),
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  tooltip: PropTypes.string,
  spin: PropTypes.bool,
};

export default withStyle(ButtonStyle)(ButtonComponent);
