import React from "react";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/th";
import numeral from "numeral";

function Card({ type, title, number = 0, updated }) {
  var cardStyle = "card-number";
  if (type == "temperature" && number > 30) {
    cardStyle = "card-number card-confirmed";
  }

  var cardStyleNumber = "card-type-number-temperature";
  if (type == "humidty") {
    cardStyleNumber = "card-type-number-humidity";
  } else if (type == "fahrenheit") {
    cardStyleNumber = "card-type-number-fahrenheit";
  }

  const getIconType = (type) => {
    if (type == "temperature" && number <= 30) {
      return "/warm.png";
    } else if (type == "temperature" && number >= 30) {
      return "/air.png";
    }
    if (type == "humidty") {
      return "/humidity.png";
    }
    if (type == "fahrenheit") {
      return "/cloud.png";
    }
  };

  // const date = new Date(updated);
  dayjs.extend(localizedFormat)

  return (
    <div className={cardStyle}>
      <div className="row">
        <div className="col-sm-4 mb-10 text-center">
          <img src={getIconType(type)} />
        </div>
        <div className="col-lg-8 pl-4">
          <div className="d-flex flex-column">
            <div className="card-type-title">{title}</div>
            <div className={cardStyleNumber}>
              {numeral(number).format("0.0[0000]")}
            </div>
            <div className="card-type-updated">
              อัพเดตล่าสุด <br />
              {dayjs(updated).locale("th").format("LLLL A")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Card);
