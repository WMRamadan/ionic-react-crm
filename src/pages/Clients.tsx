import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { person } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Clients.css';

const Clients: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Clients</IonTitle>
        </IonToolbar>
      </IonHeader>
      <ExploreContainer name="Clients page" />
      <IonContent>
        <IonCard>
          <IonItem>
            <IonIcon icon={person} slot="start" />
            <IonLabel>Client Name</IonLabel>
            <IonButton fill="outline" slot="end">Details</IonButton>
          </IonItem>

          <IonCardContent>
            Last service: August 15, 1981
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem>
            <IonIcon icon={person} slot="start" />
            <IonLabel>Client Name</IonLabel>
            <IonButton fill="outline" slot="end">Details</IonButton>
          </IonItem>

          <IonCardContent>
            Last service: August 15, 1981
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Clients;
