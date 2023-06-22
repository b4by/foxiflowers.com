import React from "react";
import timeFowrardSvg from "@/assets/svg/icons/time-forward.svg";
import heartSvg from "@/assets/svg/icons/heart.svg";
import shopSvg from "@/assets/svg/icons/shop.svg";
import timeFastSvg from "@/assets/svg/icons/time-fast.svg";
import modePortraitSvg from "@/assets/svg/icons/mode-portrait.svg";
import shieldCheckSvg from "@/assets/svg/icons/shield-check.svg";
import teamMember1 from "@/assets/img/team_1@2x.jpg";
import teamMember2 from "@/assets/img/team_2@2x.jpg";
import teamMember3 from "@/assets/img/team_3@2x.jpg";

const benefits = [
  {
    id: 0,
    title: "Круглосуточная консультация",
    text: "Принимаем заказы круглосуточно, 7 дней в неделю. Оставляйте заявку на сайте и обсуждайте детали заказа с флористом в интегрированном чате.",
    icon: timeFowrardSvg,
  },
  {
    id: 1,
    title: "Правдивые отзывы",
    text: "Клиент может оставить отзыв только после доставки и оплаты букета. Поэтому все отзывы на сервисе отображают полный и честный опыт взаимодействия с сервисом.",
    icon: heartSvg,
  },
  {
    id: 2,
    title: "Актуальный ассортимент",
    text: "Мы постоянно обновляем онлайн-витрину, благодаря чему весь ассортимент, доступный на сайте, в наличии и готов к отправке.",
    icon: shopSvg,
  },
  {
    id: 3,
    title: "Заказ за 5 минут",
    text: "Мы сделали интерфейс Foxiflowers простым и дружелюбным для заказчика. Оформить доставку можно за 5 минут. После первого заказа ваши данные сохранятся в системе и их не придется вводить вновь.",
    icon: timeFastSvg,
  },
  {
    id: 4,
    title: "Фотоотчет",
    text: "Фиксируем на фото все этапы заказа. По ним вы можете проверить внешний вид букета перед отправкой или убедиться в том, что заказ доставлен по адресу.",
    icon: modePortraitSvg,
  },
  {
    id: 5,
    title: "Надежная техподдержка",
    text: "Вы можете обратиться к поддержке Foxiflowers с любым вопросом. Операторы всегда на связи, чтобы помочь вам с выбором, оплатой или доставкой.",
    icon: shieldCheckSvg,
  },
];

const values = [
  {
    id: 0,
    title: "Постоянное развитие",
    text: "Мы никогда не стоим на месте и стараемся учесть все пожелания наших клиентов.",
    bgColor: "bg-value1",
    emoji: "☝️",
  },
  {
    id: 1,
    title: "Честность во всем",
    text: "Вы никогда не встретитесь с обманом или любым другим видом мошенничества.",
    bgColor: "bg-value2",
    emoji: "🙏",
  },
  {
    id: 2,
    title: "Эстетичность",
    text: "Изящество наших букетов отражает гармоничность, совершенство, упорядоченность.",
    bgColor: "bg-value3",
    emoji: "🦢",
  },
  {
    id: 3,
    title: "Доверие",
    text: "Покупая букеты у нас, Вы можете быть уверены в надежности этого сотрудничества.",
    bgColor: "bg-value4",
    emoji: "🤝",
  },
];

const teamMembers = [
  {
    id: 0,
    name: "Каролина",
    job: "Генеральный директор",
    desc: "Основательница Foxiflowers и владелица двух франшиз цветочных магазинов Каролина Орлова - профессионал во флористическом бизнесе.",
    photo: teamMember1,
  },
  {
    id: 1,
    name: "Демьян",
    job: "Арт-директор",
    desc: "За неповторимый стиль и концепцию Foxiflowers отвечает арт-директор Демьян Багаев, который знает все о флористике, декоре и дизайне.",
    photo: teamMember2,
  },
  {
    id: 2,
    name: "Алсу",
    job: "Главный флорист",
    desc: "Главный флорист Foxiflowers Алсу Каримова имеет за плечами шестилетний опыт обучения в ведущих флористических школах Москвы и Санкт-Петербурга.",
    photo: teamMember3,
  },
];

const AboutPage = () => {
  return (
    <div className="pt-[42px]">
      <div className="px-4 sm:px-4 md:px-4 lg:px-6 xl:px-0">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-bold text-[32px] leading-[36px] mb-[80px] text-center">
            О нас
          </h2>
          <section className="flex flex-col justify-center gap-y-6 font-light text-[16px] text-[#292929] text-center pb-[40px]">
            <span>
              <strong>Foxiflowers</strong> – дарите близким красоту!
            </span>
            <p>
              Иногда букет цветов красноречивее любых слов. Можно выразить
              любовь шикарным букетом из 101 розы, благодарность букетом
              красивейших орхидей или радость и непринужденность милым букетом
              ромашек: выбор только за вами. Миссия Foxiflowers помочь вам
              подобрать эффектный подарок и доставить его счастливому
              получателю. Мы заботимся о качестве букетов, все они созданы из
              цветов с лучших плантаций, оформлены креативными флористами и
              доставлены быстрыми и вежливыми курьерами.
            </p>
            <p>
              Букеты Foxiflowers – это произведения искусства, привносящие
              красоту и эстетику в жизнь. Мы прислушиваемся ко всем пожеланиям
              клиентов, начиная от оформления букета и заканчивая способом
              доставки. Порадуйте себя и близких прекрасными букетами и отличным
              сервисом!
            </p>
          </section>
          <section className="pt-[40px] pb-[40px]">
            <h2 className="font-bold text-[32px] leading-[36px] mb-[80px] text-center">
              Наши преимущества
            </h2>
            <ul className="grid xl:grid-cols-3 gap-x-8 gap-y-[75px]">
              {benefits.map((item) => (
                <li
                  className="flex flex-col items-center text-center gap-y-4 text-[#292929]"
                  key={item.id}
                >
                  <div className="relative">
                    <div className="absolute bottom-[7px] left-[9px] w-16 h-16 rounded-2xl bg-[#E69460] transform rotate-[15deg]"></div>
                    <div className="relative w-16 h-16 border border-[#EBEBEB] rounded-2xl bg-benefitsItem backdrop-blur-[6.5px]">
                      <img
                        src={item.icon}
                        alt="item icon"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      />
                    </div>
                  </div>
                  <h3 className="font-bold text-[16px] leading-[18px]">
                    {item.title}
                  </h3>
                  <p className="font-light text-[16px] leading-[18px]">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </section>
          <section className="pt-[40px] pb-[80px]">
            <h2 className="font-bold text-[32px] leading-[36px] mb-[80px] text-center">
              Ценности
            </h2>
            <ul className="grid xl:grid-cols-2 gap-8">
              {values.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-x-6 p-6 rounded-2xl shadow-secondary"
                >
                  <div
                    className={`flex-shrink-0 relative w-[78px] h-[78px] border-2 border-white ${item.bgColor} rounded-full shadow-value`}
                  >
                    <span className="font-bold text-[32px] leading-[36px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                      {item.emoji}
                    </span>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <h3 className="font-bold text-[16px] leading-[18px]">
                      {item.title}
                    </h3>
                    <p className="font-light text-[16px] leading-[18px]">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
      <section className="bg-[#FBE0DC] pt-[80px] pb-[200px]">
        <div className="px-4 sm:px-4 md:px-4 lg:px-6 xl:px-0">
          <div className="max-w-7xl mx-auto px-8">
            <h3 className="font-bold text-[16px] leading-[18px] py-3 px-[26px] border border-black rounded-3xl w-fit mb-[42px]">
              Наша команда
            </h3>
            <h4 className="font-light text-[32px] leading-[36px] max-w-[827px] mb-[80px]">
              Знакомьтесь с командой людей, которые с любовью относятся к своему
              делу.
            </h4>
            <ul className="grid xl:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <li
                  key={member.id}
                  className={`relative flex flex-col gap-y-8 group ${
                    member.id === 1 && "top-[60px]"
                  } ${member.id === 2 && "top-[120px]"}`}
                >
                  <img
                    src={member.photo}
                    alt="team member photo"
                    className="w-[397px] h-[397px] object-cover saturate-0 group-hover:saturate-100 transition ease-in-out duration-1000"
                  />
                  <div>
                    <h5 className="font-bold text-[24px] leading-[27px] mb-3">
                      {member.name}
                    </h5>
                    <h6 className="font-medium text-[16px] leading-[18px] mb-4">
                      {member.job}
                    </h6>
                    <p className="text-[16px] leading-[18px]">{member.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
