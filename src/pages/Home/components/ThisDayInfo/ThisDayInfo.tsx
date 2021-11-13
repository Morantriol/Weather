import React from "react";

import cloud from "../../../../assets/images/cloud.png";

import s from "./ThisDayInfo.module.scss";
import ThisDayItem from "./ThisDayItem";

interface Props {}

export interface Item {
  icon_id: string;
  name: string;
  value: string;
}

const ThisDayInfo = (props: Props) => {
  const items = [
    {
      icon_id: "temp",
      name: "Temperature",
      value: "Breaks of sun late. Breaks of sun late. Breaks of sun late.",
    },
    {
      icon_id: "pressure",
      name: "Pressure",
      value: "Breaks of sun late.",
    },
    {
      icon_id: "precipitation",
      name: "Precipitation",
      value: "Breaks of sun late.",
    },
    {
      icon_id: "wind",
      name: "Wind",
      value: "Breaks of sun late.",
    },
  ];

  return (
    <div className={s.this__day_info}>
      <div className={s.this__day_info_items}>
        {items.map((item: Item) => (
          <ThisDayItem key={item.icon_id} item={item} />
        ))}
      </div>
      <img className={s.cloud__img} src={cloud} alt="Cloud" />
    </div>
  );
};

export default ThisDayInfo;
