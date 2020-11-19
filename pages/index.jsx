import React, { useState, useEffect } from "react";
import Head from 'next/head';

import firebase from "./api/firebase";
import Layout from "../components/Layout";
import Card from "../components/Card";

export default function Home() {
  const [Temperature, setTemperature] = useState(0); 
  const [Fahrenheit, setFahrenheit] = useState(0);
  const [Humidty, setHumidity] = useState(0);
  const [Updated, setUpdated] = useState("");
   
  const getData = firebase.database().ref("FirebaseIOT");
  
  useEffect(() => {
     getData.on("value", snapshot => {
     var data = snapshot.val();
     setTemperature(data.temperature);
     setFahrenheit(data.fahrenheit);
     setHumidity(data.humidity);
     setUpdated(data.updated);
   })
  }, []);

  const renderCardSection = () => {
    return (
      <div className="card-stats-section">
        <div className="row">
          <div className="col-lg-4">
            <Card
              type="temperature"
              title="อุณหภูมิ °C"
              number={Temperature}
              updated={Updated}
            />
          </div>
          <div className="col-lg-4">
            <Card
              type="fahrenheit"
              title="อุณหภูมิ °F"
              number={Fahrenheit}
              updated={Updated}
            />
          </div>
          <div className="col-lg-4">
            <Card
              type="humidty"
              title="ความชื้น"
              number={Humidty}
              updated={Updated}
            />
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <Layout>
      <Head>
        <title>Boat App</title>
        <link rel="icon" href="/cloud.png" />
      </Head>
      <div className="top-section">
        <p>สถานะอุณหภูมิห้องของ Boat</p>
      </div>
      {renderCardSection()}
    </Layout>
  );
}
