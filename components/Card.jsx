import React from "react";

import numeral from "numeral";
import moment from "moment";

function Card({ type, title, number = 0, updated }) {
  var cardStyle = "card-number";
  if (type == "temperature") {
    cardStyle = "card-number card-confirmed";
  }
  var cardStyleNumber = "card-type-number-temperature";
  if (type == "humidty") {
    cardStyleNumber = "card-type-number-humidity";
  } else if (type == "fahrenheit") {
    cardStyleNumber = "card-type-number-fahrenheit";
  }
  const getIconType = (type) => {
    switch (type) {
      case "temperature":
        return "/warm.png";
      case "humidty":
        return "/humidity.png";
      case "fahrenheit":
        return "/cloud.png";
    }
  };

  return (
    <div className={cardStyle}>
      <div className="row">
        <div className="col-sm-4 mb-10">
          <img src={getIconType(type)} />
        </div>
        <div className="col-lg-8 pl-4">
          <div className="d-flex flex-column">
            <div className="card-type-title">{title}</div>
            <div className={cardStyleNumber}>
              {numeral(number).format("0.0[0000]")}
            </div>
            <div className="card-type-updated">
              อัพเดตล่าสุด{" "}
              {moment(updated).locale("th").format("DD-MM-YYYY HH:MM a")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Card);
