import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonFabButton,
  IonIcon,
} from "@ionic/react";
import React, { useState } from "react";
import "./Home.css";
import { sendOutline } from "ionicons/icons";

const Home: React.FC = () => {
  const [message, setMessage] = useState("");
  const [receivedMessage, setRecievedMessage] = useState("My message");
  const onSend = () => {
    setRecievedMessage(message);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Nearby messages</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="conatiner">
          <IonTitle>{receivedMessage}</IonTitle>
          <div className="message-bar">
            <IonItem className="ion-item">
              <IonInput
                placeholder="Message to send"
                onIonInput={(e: any) => setMessage(e.target.value)}
              />
            </IonItem>
            <IonFabButton className="ion-fab" onClick={onSend}>
              <IonIcon icon={sendOutline} />
            </IonFabButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
