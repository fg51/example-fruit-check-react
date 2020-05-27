import React from 'react';
import {
  IonContent,
  IonHeader,
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
} from '@ionic/react';
import SelectTarget from './SelectTarget';

const TargetInfo: React.FC = () => {
  return (
    <IonCard>
      <IonCardContent>
        <IonItem>
          <IonLabel>作業番号</IonLabel>
          <IonInput
            type="text"
            name="work-number"
            placeholder="20-Y-1234"
            color="primary"
          />
        </IonItem>

        <SelectTarget />

        <IonItem>
          <IonLabel>果物</IonLabel>
          <IonSelect placeholder="果物">
            <IonSelectOption value="apple">apple</IonSelectOption>
            <IonSelectOption value="banana">banana</IonSelectOption>
            <IonSelectOption value="candy">candy</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel>製造番号</IonLabel>
          <IonInput type="text" name="serial-number" placeholder="101" />
        </IonItem>

        <IonItem>
          <IonListHeader>生産国</IonListHeader>
          <IonSegment value="country">
            <IonSegmentButton value="america">
              <IonLabel>America</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="brazil">
              <IonLabel>Brazil</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="china" disabled>
              <IonLabel>China</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonItem>

        <IonItem>
          <IonLabel>非標準種</IonLabel>
          <IonInput
            type="text"
            name="nonstandard-number"
            placeholder="mut"
          />
        </IonItem>
      </IonCardContent>
    </IonCard>
  );
};

export default TargetInfo
