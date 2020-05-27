import React from 'react';
import {
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
} from '@ionic/react';

const SelectTarget: React.FC = () => {
  return (
    <IonItem>
      <IonLabel>果物</IonLabel>
      <IonSelect placeholder="果物">
        <IonSelectOption value="apple">apple</IonSelectOption>
        <IonSelectOption value="banana">banana</IonSelectOption>
        <IonSelectOption value="candy">candy</IonSelectOption>
      </IonSelect>
    </IonItem>
  );
};

export default SelectTarget;
