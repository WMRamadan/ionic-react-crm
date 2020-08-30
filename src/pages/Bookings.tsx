import React from 'react';
import Calendar from 'react-calendar';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Bookings.css';
import 'react-calendar/dist/Calendar.css';

const Bookings: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bookings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Bookings</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Bookings page" />
        <Calendar />
      </IonContent>
    </IonPage>
  );
};

export default Bookings;
