import React from "react";

const DeliveryPage = () => {
  return (
    <div className="pt-[42px] pb-[180px]">
      <div className="px-4 sm:px-4 md:px-4 lg:px-6 xl:px-0">
        <div className="max-w-7xl mx-auto px-8">
          <div className="xl:pl-[106px] ">
            <h2 className="font-bold text-[32px] leading-[36px] mb-[42px]">
              Доставка
            </h2>
            <ul className="flex flex-col gap-8">
              <li className="flex flex-col gap-y-4">
                <h3 className="font-bold text-[20px] leading-[22px]">
                  Доставка по Москве
                </h3>
                <p className="font-light text-[16px] leading-6">
                  Бесплатно доставим букет с 07:00 до 23:00 по московскому
                  времени. Стоимость доставки в отдаленные районы можно уточнить
                  у менеджера.
                </p>
              </li>
              <li className="flex flex-col gap-y-4">
                <h3 className="font-bold text-[20px] leading-[22px]">
                  Способы доставки
                </h3>
                <h4 className="font-bold text-[16px] leading-[18px]">
                  На данный момент есть 2 способа доставки:
                </h4>
                <ul className="list-inside list-decimal flex flex-col gap-y-4">
                  <li className="font-light text-[16px] leading-6">
                    По предварительной договоренности. Курьер свяжется с
                    получателем и уточнит детали доставки. Если вы желаете
                    сделать сюрприз, мы не сообщим получателю о содержимом
                    заказа.
                  </li>
                  <li className="font-light text-[16px] leading-6">
                    Без предварительной договоренности. В указанный промежуток
                    времени курьер вручит букет получателю по указанному адресу.
                  </li>
                </ul>
              </li>
              <li className="flex flex-col gap-y-4">
                <h3 className="font-bold text-[20px] leading-[22px]">
                  Получение заказа
                </h3>
                <div className="flex flex-col gap-y-4">
                  <h4 className="font-bold text-[16px] leading-[18px]">
                    Доставка домой
                  </h4>
                  <p className="font-light text-[16px] leading-6">
                    Курьер доставит заказ получателю лично. Передача заказа
                    третьим лицам не допускается.
                  </p>
                </div>
                <div className="flex flex-col gap-y-4">
                  <h4 className="font-bold text-[16px] leading-[18px]">
                    Доставка в офис или гостиницу
                  </h4>
                  <p className="font-light text-[16px] leading-6">
                    В случае доставки заказа в офис или иное место работы, а
                    также в отели мы гарантируем доставку только до ресепшена.
                    Если у курьера будет номер телефона получателя, есть
                    возможность согласовать доставку до конкретного кабинета или
                    номера.
                  </p>
                </div>
              </li>
              <li className="flex flex-col gap-y-4">
                <h3 className="font-bold text-[20px] leading-[22px]">
                  Если курьер не застал получателя
                </h3>
                <p className="font-light text-[16px] leading-6">
                  Советуем заранее согласовать время доставки подарка с
                  получателем. Время ожидания получателя курьером составляет 15
                  минут. Если получатель не появится, то курьер позвонит вам для
                  согласования доставки на другое время. Переназначение времени
                  доставки будет платным. Если нужно перенести доставку на
                  другой день, придется заказать букет заново.
                </p>
              </li>
              <li className="flex flex-col gap-y-4">
                <h3 className="font-bold text-[20px] leading-[22px]">
                  Адрес доставки и/или контакты получателя указаны неверно
                </h3>
                <p className="font-light text-[16px] leading-6">
                  При оформлении заказа советуем внимательно проверять данные
                  получателя и при необходимости их актуализировать. Но что,
                  если информация указана с ошибкой? В таком случае мы не
                  гарантируем оперативную доставку. Для уточнения данных
                  потребуется время. Если курьер не сможет найти адрес, он
                  свяжется с получателем.
                </p>
              </li>
              <li className="flex flex-col gap-y-4">
                <h3 className="font-bold text-[20px] leading-[22px]">
                  При доставке возникли непредвиденные обстоятельства
                </h3>
                <p className="font-light text-[16px] leading-6">
                  Если вы не указали в комментарии для курьера наличие
                  консьержа, ворот с электронным замком, КПП и иных препятствий,
                  возможно, придется оформить повторную доставку. Пожалуйста, не
                  забывайте указывать в заказе необходимую информацию: код
                  домофона, ворот, наличие шлагбаума и т.д. Зная все
                  подробности, мы сможем порадовать получателя быстрой и
                  эффектной доставкой.
                </p>
              </li>
              <li className="flex flex-col gap-y-4">
                <h3 className="font-bold text-[20px] leading-[22px]">
                  Отчет о доставке
                </h3>
                <p className="font-light text-[16px] leading-6">
                  Вы можете уточнить статус заказа в личном кабинете или у
                  оператора. После вручения заказа получателю курьер отправит
                  отчет заказчику по SMS или электронной почте.
                </p>
              </li>
              <li className="flex flex-col gap-y-4">
                <h3 className="font-bold text-[20px] leading-[22px]">
                  Конфиденциальность
                </h3>
                <p className="font-light text-[16px] leading-6">
                  Вручая букет, курьер уведомляет получателя о том, что он
                  оплачен. Курьер не называет имени заказчика и других личных
                  сведений. Если вы хотите, чтобы получатель знал, что его
                  порадовали именно вы, укажите свое имя в тексте для открытки.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;
