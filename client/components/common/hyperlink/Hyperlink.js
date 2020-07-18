import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Hyperlink = (props) => {
  const {external} = props;
  let output;

  if (external) {
    output = <ExternalLink {...props} />;
  } else {
    output = <InternalLink {...props} />;
  }

  return output;
};

const ExternalLink = (props) => {
  const {
    to, disabled, target, title, download, className = '', classes, type,
  } = props;

  return (
    <a
      className={`${classes.root} ${type} ${className}`}
      href={to}
      target={target}
      aria-disabled={disabled}
      title={title}
      download={download}
    >
      {props.children}
    </a>
  );
};

const InternalLink = (props) => {
  const {
    to, disabled, target, navigation, title, className = '', classes, type = '', activeClassName = '',
  } = props;

  let output;

  if (navigation) {
    output = (
      <NavLink
        className={`${classes.root} ${type} ${className}`}
        to={to}
        target={target}
        aria-disabled={disabled}
        title={title}
        activeClassName={activeClassName}
      >
        {props.children}
      </NavLink>
    );
  } else {
    output = (
      <Link
        className={`${classes.root} ${type} ${className}`}
        to={to}
        target={target}
        aria-disabled={disabled}
        title={title}
      >
        {props.children}
      </Link>
    );
  }

  return output;
};

Hyperlink.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string,
    }),
  ]).isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  target: PropTypes.string,
  external: PropTypes.bool,
  type: PropTypes.string,
  navigation: PropTypes.bool,
  title: PropTypes.string,
  download: PropTypes.string,
  activeClassName: PropTypes.string,
};

Hyperlink.defaultProps = {
  external: false,
  navigation: false,
};

export default Hyperlink;
