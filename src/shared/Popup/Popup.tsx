import React from "react";
import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";
import { Item } from "../../pages/Home/components/ThisDayInfo/ThisDayInfo";
import ThisDayItem from "../../pages/Home/components/ThisDayInfo/ThisDayItem";

import s from "./Popup.module.scss";

interface Props {}

const Popup = (props: Props) => {
  const items = [
    {
      icon_id: "temp",
      name: "Temperature",
      value: "Breaks of sun late.",
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
    <>
      <div className={s.blur}></div>
      <div className={s.popup}>
        <div className={s.day}>
          <div className={s.day__temp}>12°</div>
          <div className={s.day__name}>Wednesday</div>
          <div className={s.img}>
            <GlobalSvgSelector id='sun' />
          </div>
          <div className={s.day__time}>
            Time: <span>00:17</span>
          </div>
          <div className={s.day_city}>City: Yekaterinburg</div>
        </div>
        <div className={s.this__day_info_items}>
          {items.map((item: Item) => (
            <ThisDayItem key={item.icon_id} item={item} />
          ))}
        </div>
        <div className={s.close}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </>
  );
};

export default Popup;
