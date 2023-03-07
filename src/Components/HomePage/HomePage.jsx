import React from "react";
import GameItem from "../GameItem/GameItem";
import s from "./homePage.module.css";

const GAMES = [
  {
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/capsule_616x353.jpg?t=1677534139",
    title: "Forza Horizon 5",
    genres: ["Гонки", "Симулятор", "Відкритий світ"],
    price: 695,
    video: "https://www.youtube.com/embed/FYH9n37B7Yw",
    id: 1,
    description:
      "На Вас чекає нескінченний калейдоскоп пригод Horizon! Здійснюйте захоплюючі поїздки неймовірно красивим і самобутнім світом Мексики за кермом найбільших автомобілів в історії. Почніть свою пригоду Horizon вже сьогодні, додавши гру до свого списку бажань!",
  },
  {
    image:
      "https://media.contentapi.ea.com/content/dam/battlefield/battlefield-2042/images/2021/04/k-1920x1080-featured-image.jpg.adapt.crop191x100.1200w.jpg",
    title: "Battlefield 2042",
    genres: ["Екшн", "Шутер", "Війна"],
    video: "https://www.youtube.com/embed/ASzOzrB-a9E",
    price: 540,
    id: 2,
    description:
      "Battlefield™ 2042 - це шутер від першої особи, в якому серія повертається до легендарних масштабних битв. У майбутньому, де панує хаос, адаптуйтеся і процвітайте на полях бою, що постійно змінюються, завдяки своєму загону і арсеналу новітніх технологій.",
  },
  {
    image:
      "https://n8t8d9t2.rocketcdn.me/wp-content/uploads/2021/09/gm9295.jpg",
    title: "Life is Strange True Colors",
    genres: ["Глибокий сюжет", "Протагоністка"],
    video: "https://www.youtube.com/embed/b6CkzwVAr0M",
    price: 899,
    id: 3,
    description:
      "Алекс Чень від усіх приховує своє «прокляття» — надприродну здатність зчитувати сильні емоції інших та впливати на них. Але коли її брат гине — нібито внаслідок нещасного випадку, Алекс використовує її, щоб дізнатися правду.",
  },
  {
    image:
      "https://variety.com/wp-content/uploads/2013/09/gta-v-big.jpg?w=681&h=383&crop=1",
    title: "Grand Theft Auto V",
    genres: ["Відкритий світ", "Екшн"],
    video: "https://www.youtube.com/embed/QkkoHAzjnUs",
    price: 321,
    id: 4,
    description:
      "Grand Theft Auto V для PC дозволяє гравцям дослідити знаменитий світ Лос-Сантоса та округу Блейн у роздільній здатності до 4k і вище з частотою 60 кадрів на секунду.",
  },
  {
    image:
      "https://s2.gaming-cdn.com/images/products/406/616x353/tom-clancy-s-rainbow-six-siege-pc-game-ubisoft-connect-europe-cover.jpg?v=1649421231",
    title: "Tom Clancy's Rainbow Six® Siege",
    video: "https://www.youtube.com/embed/6wlvYh0h63k",
    genres: ["Тактика", "Шутер"],
    price: 420,
    id: 5,
    description:
      "Tom Clancy's Rainbow Six Облога - це продовження гучного шутера від першої особи, розробленої студією Ubisoft Montreal.",
  },
  {
    image:
      "https://cdn.akamai.steamstatic.com/steam/apps/2208920/capsule_616x353.jpg?t=1671135934",
    title: "Assassin’s Creed Valhalla",
    genres: ["Паркур", "РПГ", "Відкритий світ"],
    video: "https://www.youtube.com/embed/ssrNcwxALS4",
    price: 850,
    id: 6,
    description:
      "Assassin's Creed Valhalla — мультиплатформна гра в жанрі action/RPG, розроблена студією Ubisoft Montreal під видавництвом компанії Ubisoft. Є дванадцятою грою в серії ігор Assassin Creed.",
  },
];

function HomePage() {
  return (
    <div className={s.homePage}>
      {GAMES.map((game) => (
        <GameItem game={game} key={game.id} />
      ))}
    </div>
  );
}

export default HomePage;
