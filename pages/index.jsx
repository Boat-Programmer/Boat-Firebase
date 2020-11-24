import React, { useState, useEffect, Fragment } from "react";

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
          <div className="col-lg-4 mt-3">
            <Card
              type="temperature"
              title="อุณหภูมิ °C"
              number={Temperature}
              updated={Updated}
            />
          </div>
          <div className="col-lg-4 mt-3">
            <Card
              type="fahrenheit"
              title="อุณหภูมิ °F"
              number={Fahrenheit}
              updated={Updated}
            />
          </div>
          <div className="col-lg-4 mt-3">
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

  const renderClokSection = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
      var timerID = setInterval(() => tick(), 1000);

      return function cleanup() {
        clearInterval(timerID);
      };
    });

    const tick = () => {
      setDate(new Date());
    }

    const result = date.toLocaleDateString("th-TH", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    return (
      <div>
        <h2>{result}</h2>
      </div>
    );
  }
  
  return (
    <Fragment>
      <Layout>
        <div className="top-section">
          <img className="logo" src="/cloudy-logo.png" />
          <h1>B Cloud</h1>
          <p>สถานะอุณหภูมิห้องของ Boat อัพเดททุก 5 นาที</p>
          {renderClokSection()}
        </div>
        {renderCardSection()}
      </Layout>
    </Fragment>
  );
}
