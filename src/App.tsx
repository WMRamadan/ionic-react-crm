import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { layers, book, people } from 'ionicons/icons';
import Clients from './pages/Clients';
import Bookings from './pages/Bookings';
import Services from './pages/Services';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/clients" component={Clients} exact={true} />
          <Route path="/bookings" component={Bookings} exact={true} />
          <Route path="/services" component={Services} />
          <Route path="/" render={() => <Redirect to="/bookings" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="clients" href="/clients">
            <IonIcon icon={people} />
            <IonLabel>Clients</IonLabel>
          </IonTabButton>
          <IonTabButton tab="bookings" href="/bookings">
            <IonIcon icon={book} />
            <IonLabel>Bookings</IonLabel>
          </IonTabButton>
          <IonTabButton tab="services" href="/services">
            <IonIcon icon={layers} />
            <IonLabel>Services</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
