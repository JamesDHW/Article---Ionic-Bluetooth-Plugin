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

import { Plugins } from "@capacitor/core";

const Home: React.FC = () => {
  const { NearbyMessagesPlugin } = Plugins;

  const [messageToSend, setMessageToSend] = useState("");
  const [receivedMessage, setRecievedMessage] = useState("A message");

  NearbyMessagesPlugin.Subscribe();

  NearbyMessagesPlugin.addListener("onFound", (result: { message: string }) => {
    console.log(result.message);
    setRecievedMessage(result.message);
  });
  NearbyMessagesPlugin.addListener("onLost", (result: { message: string }) => {
    console.log(result.message);
  });

  const onSend = async () => {
    await NearbyMessagesPlugin.Publish({ message: messageToSend });
    setMessageToSend("");
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
          <div className="tall">
            <p>{receivedMessage}</p>
          </div>
          <div className="message-bar">
            <IonItem className="ion-item">
              <IonInput
                placeholder="Message to send"
                value={messageToSend}
                onIonInput={(e: any) => setMessageToSend(e.target.value)}
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
