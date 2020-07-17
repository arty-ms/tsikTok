import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../button';
import MenuStyle from './MenuStyle';
import Backdrop from '../Backdrop';
import { getClassName } from '../../../utils/ClassUtils';

class MenuComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      isOpening: false,
    };

    this.setOpenState = this.setOpenState.bind(this);
  }

  setOpenState(isOpen) {
    this.setState({
      isOpen: isOpen ? true : this.state.isOpen,
      isOpening: true,
      isClosing: false,
    });

    setTimeout(() => {
      this.setState({
        isOpen: !isOpen ? false : this.state.isOpen,
        isOpening: false,
        isClosing: false,
      });
    }, 100);
  }

  render() {
    const {
      classes,
      children,
      label,
    } = this.props;

    const {
      isOpen,
      isOpening,
      isClosing,
    } = this.state;
    const rootClasses = getClassName([
      classes.root,
      isOpening ? 'opening' : '',
      isClosing ? 'closing' : '',
    ]);
    const MenuButton = label ? (
      <div
        tabIndex='0'
        className={classes.brandTitle}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            this.setOpenState(!isOpen);
          }
        }}
        onClick={() => this.setOpenState(true)}
      >
        <FontAwesomeIcon
          className={classes.barsIcon}
          icon={'bars'}
        />
        {label}
      </div>
    ) : (
      <Button onClick={() => this.setOpenState(true)}>
        <FontAwesomeIcon className={classes.barsIcon} icon={'bars'}/>
      </Button>
    );

    if (!isOpen) {
      return MenuButton;
    }

    return (
      <>
        <div>
          {MenuButton}
        </div>
        <Backdrop
          className={classes.backdrop}
          isOpening={isOpening}
          isClosing={isClosing}
          onClick={() => this.setOpenState(false)}
        />
        <ul className={rootClasses} onClick={(e) => {
          e.stopPropagation();

          this.setOpenState(false);
        }}>
          <FontAwesomeIcon
            tabIndex='0'
            className={classes.closeIcon}
            icon={'times'}
            onClick={() => this.setOpenState(false)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                this.setOpenState(false);
              }
            }}
          />
          {children}
        </ul>
      </>
    );
  }
}

MenuComponent.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node,
  label: PropTypes.string,
};

export default withStyles(MenuStyle)(MenuComponent);
