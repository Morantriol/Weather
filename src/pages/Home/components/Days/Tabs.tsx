import React from "react";

import s from "./Days.module.scss";

interface Props {}

interface Tab {
  value: string;
}

const Tabs = (props: Props) => {
  const tabs: Tab[] = [
    {
      value: "На неделю",
    },
    {
      value: "На 10 дней",
    },
    {
      value: "На месяц",
    },
  ];
  return (
    <div className={s.tabs}>
      <div className={s.tabs__wrapper}>
        {tabs.map((tab: Tab) => (
          <div key={tab.value} className={s.tab}>
            {tab.value}
          </div>
        ))}
      </div>
      <div className={s.cancel}>Cancel</div>
    </div>
  );
};

export default Tabs;
