import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import './App.css';

function Menu() {
  return <nav className="menu">
    <NavLink className="menu__item" to="/">Главная</NavLink>
    <NavLink className="menu__item" to="/drift">Дрифт-такси</NavLink>
    <NavLink className="menu__item" to="/timeattack">Time Attack</NavLink>
    <NavLink className="menu__item" to="/forza">Forza Karting</NavLink>
  </nav>;
}

const Page = ({ title, paragraphs }) => (
  <div className="page"><article className="article">
    <h1 className="article__title">{title}</h1>
    {paragraphs.map((text, key) => <p key={key} className="article__paragraph">{text}</p>)}
  </article></div>
);

const pageObjects = {
  home: {
    title: "Гоночное такси",
    paragraphs: [`Гоночное такси – отличная возможность насладиться скоростью и мастерством гонщика,
      сидя на месте штурмана, и стать свидетелем настоящего мастерства профессиональных
      инструкторов Сочи Автодрома, в полной мере ощутив крутые виражи на самой современной
      гоночной трассе России.`]
  },
  drift: {
    title: "Дрифт-такси",
    paragraphs: [`Только на Сочи Автодроме вас ждет уникальная возможность
      промчаться по трассе Формулы 1 на максимально возможной
      скорости в управляемом заносе на легендарной «королеве дрифта» Nissan Silvia!`,

      `Прокатитесь на дрифт-такси с вице-чемпионом Межконтинентального
      кубка по дрифту под эгидой FIA 2017 года Аркадием Цареградцевым и
      испытайте на себе, что значат скоростные постановки и эффектные заносы!`]
  },
  forza: {
    title: "Forza Karting Sochi",
    paragraphs: [`В Олимпийском парке работает новый открытый развлекательный картинг центр мирового уровня!`,

      `Вас ждут большая, широкая, безопасная трасса и супер современные карты
      европейского производства c двигателями мощностью 13 л.с.
      Трасса длинной более 500 метров  оборудована системой хронометража,
      фиксирующей данные заезда в режиме реального времени.
      По окончании заезда каждый пилот получает распечатку со своими результатами.`]
  },
  timeAttack: {
    title: "Гонка Time Attack",
    paragraphs: [`Гонка Time Attack создана для тех, кто любит ставить рекорды –
      открытое соревнование на гражданских автомобилях не предполагает
      контактной борьбы пилотов во время заезда, но позволит в полной мере
      ощутить скорость, найти идеальную траекторию и реализовать весь
      потенциал своего автомобиля. Каждый участник проезжает по Сочи Автодрому
      определённое количество кругов, а в зачёт идёт только лучшее время одного
      круга из всех заездов. Для того, чтобы попробовать свои силы на лучшей
      гоночной трассе страны, Вам понадобится исправный легковой автомобиль
      на летних шинах и шлем.`]
  }
};

const HomePage = () => <Page {...pageObjects.home} />

const DriftPage = () => <Page {...pageObjects.drift} />

const ForzaPage = () => <Page {...pageObjects.forza} />

const TimeAttackPage = () => <Page {...pageObjects.timeAttack} />

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" end element={<HomePage />} />
        <Route path="/drift" element={<DriftPage />} />
        <Route path="/timeattack" element={<TimeAttackPage />} />
        <Route path="/forza" element={<ForzaPage />} />
        <Route path="*" element={<div className="not-found">Page not found \_(ツ)_/</div>} />
      </Routes>
    </BrowserRouter>
  );
};
