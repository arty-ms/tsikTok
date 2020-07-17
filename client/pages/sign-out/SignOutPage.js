import React, { useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import AuthorizationContext from '../../contexts/AuthorizationContext';

const SignOutPage = (props) => {
  const { history } = props;
  const { signOut } = useContext(AuthorizationContext);

  const signOutFromApp = async () => {
    await signOut();

    history.push('');
  };

  useEffect(() => {
    signOutFromApp();
  }, []);

  return <div>Please, wait...</div>;
};

export default withRouter(SignOutPage);
