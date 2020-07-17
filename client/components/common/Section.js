import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Card from './card';

export const SectionStyles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    margin: '10px',
  },
  title: {
    margin: '5px 0 10px 0',
    fontSize: '24px',
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  children: {
    flexDirection: 'column',
  },
});

const SectionComponent = ({classes, children, title}) => (
  <Card className={classes.root}>
    <div className={classes.title}>{title}</div>
    <div className={classes.children}>{children}</div>
  </Card>
);

SectionComponent.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node,
  title: PropTypes.string,
};

export const Section = withStyles(SectionStyles)(SectionComponent);

export const SectionItemStyle = theme => ({
  root: {
    width: '100%',
    padding: '5px 0',
    backgroundColor: 'white',
    position: 'relative',
    fontWeight: theme.controlFontWeight,
    borderBottom: theme.border,
    '&:last-of-type': {
      borderBottom: 'none',
    },
  },
  title: {
    marginTop: '5px',
    fontSize: '18px',
  },
  children: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    '& > *': {
      margin: '10px 10px 0 0',
      '&:first-of-type': {
        marginLeft: '0',
      },
    },
  },
});

const SectionRowComponent = ({classes, children, title}) => (
  <div className={classes.root}>
    {title ? <div className={classes.title}>{title}</div> : null}
    <div className={classes.children}>{children}</div>
  </div>
);

SectionRowComponent.propTypes = {
  classes: PropTypes.object,
  title: PropTypes.string,
  children: PropTypes.node,
};

export const SectionRow = withStyles(SectionItemStyle)(SectionRowComponent);
