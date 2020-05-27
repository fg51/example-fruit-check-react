import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonList,
  IonListHeader,
  IonSegment,
  IonSegmentButton,
  IonRadio,
  IonRadioGroup,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import TargetInfo from '../components/TargetInfo';
import Footer from '../components/Footer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CheckSheet - Fruit</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>

        </IonHeader>

        <ExploreContainer name="Tab 1 page" />

        <TargetInfo />

        <IonLabel>0. 作業手順 </IonLabel>
        <IonItem>
          <IonRadioGroup value="standard-kind">
            <IonItem>
              <IonLabel>標準種：標準手順</IonLabel>
              <IonRadio />
            </IonItem>
            <IonItem>
              <IonLabel>非標準種：製作手配書付属資料</IonLabel>
              <IonRadio />
            </IonItem>
          </IonRadioGroup>
        </IonItem>

        <IonList>
          <IonListHeader>1. visual</IonListHeader>
          <IonItem> visual </IonItem>
          <IonItem> weigth </IonItem>
        </IonList>

        <IonList>
          <IonListHeader>2. taste</IonListHeader>
          <IonItem>
            <IonLabel>sweet</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>sour</IonLabel>
          </IonItem>
        </IonList>

      </IonContent>
      <Footer></Footer>
    </IonPage>
  );
};

export default Tab1;
