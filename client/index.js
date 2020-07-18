import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppWithSettings } from './contexts/SettingsContext';
import { MobileApp } from './contexts/MobileContext';
import { LoadingApp } from './contexts/LoadingContext';
import { AuthorizedApp } from './contexts/AuthorizationContext';
import { ThemedApp } from './contexts/ThemeContext';
import { I18NApp } from './contexts/I18NContext';
import { NotificationApp } from './contexts/NotificationContext';
import { AppWithModalDialog } from './contexts/ModalDialogContext';
import Application from './application';
import './common/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

ReactDOM.render(
  <BrowserRouter>
    <AuthorizedApp>
      <AppWithSettings>
        <MobileApp>
          <LoadingApp>
            <ThemedApp>
              <I18NApp>
                <NotificationApp>
                  <AppWithModalDialog>
                    <AuthorizedApp>
                      <Application/>
                    </AuthorizedApp>
                  </AppWithModalDialog>
                </NotificationApp>
              </I18NApp>
            </ThemedApp>
          </LoadingApp>
        </MobileApp>
      </AppWithSettings>
    </AuthorizedApp>
  </BrowserRouter>,
  document.getElementById('root'),
);
