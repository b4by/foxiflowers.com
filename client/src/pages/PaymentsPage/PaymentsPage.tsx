import React from "react";

const PaymentsPage = () => {
  return (
    <div className="pt-[42px] pb-[180px]">
      <div className="px-4 sm:px-4 md:px-4 lg:px-6 xl:px-0">
        <div className="max-w-7xl mx-auto px-8">
          <div className="xl:pl-[106px]">
            <h2 className="font-bold text-[32px] leading-[36px] mb-[42px]">
              Оплата
            </h2>
            <div className="flex flex-col gap-y-8 mb-[42px]">
              <p className="font-light text-[16px] leading-6">
                Принимаем карты платежных систем Visa, MasterCard, WorldWide,
                МИР. Для оплаты букета картой, на странице оформления заказа
                выберете способ оплаты «банковской картой».
              </p>
              <p className="font-light text-[16px] leading-6">
                Платеж проводится на авторизационной странице банка, где
                необходимо ввести данные карты, с которой производится оплата:
              </p>
              <ul className="list-outside list-decimal flex flex-col gap-y-2 pl-[20px]">
                <li className="font-light text-[16px] leading-6">Тип карты</li>
                <li className="font-light text-[16px] leading-6">
                  Номер карты
                </li>
                <li className="font-light text-[16px] leading-6">
                  Срок действия карты (указан на лицевой стороне карты)
                </li>
                <li className="font-light text-[16px] leading-6">
                  Имя держателя карты (латинскими буквами, точно также как
                  указано на карте)
                </li>
                <li className="font-light text-[16px] leading-6">
                  CVC2/CVV2 код
                </li>
              </ul>
              <p className="font-light text-[16px] leading-6">
                Большинство карт, выпущенных в России, подключены к услуге
                3D-Secure, которая автоматически переадресовывает платеж на
                страницу банка, выпустившего карту, для прохождения
                аутентификации. Дополнительную информацию о правилах оплаты и
                идентификации вы можете уточнить в банке, где выпущена
                банковская карта.
              </p>
              <p className="font-light text-[16px] leading-6">
                Безопасность интернет-платежей через платежный шлюз банка
                подтверждена международным сертификатом безопасности PCI DSS.
                Передача информации происходит по технологии шифрования SSL. Эта
                информация недоступна третьим лицам.
              </p>
            </div>
            <div>
              <h2 className="font-bold text-[32px] leading-[36px] mb-[42px]">
                Рекомендации по безопасности
              </h2>
              <ul className="list-outside list-decimal flex flex-col gap-y-2 pl-[20px]">
                <li className="font-light text-[16px] leading-6">
                  Пользуйтесь только своим устройством. Совершайте покупку
                  только с личного компьютера, телефона или планшета. Не
                  забудьте поставить пароль на устройство, с которого регулярно
                  совершаете оплату.
                </li>
                <li className="font-light text-[16px] leading-6">
                  Поставьте проверенный антивирус на все устройства,
                  подключенные к мобильному банку, и регулярно обновляйте
                  программу. Хороший антивирус включает защиту от фишинга и
                  вирусных программ.
                </li>
                <li className="font-light text-[16px] leading-6">
                  Подключите СМС-оповещения об операциях. С помощью них вы сразу
                  узнаете об оплате, которую не совершали, и сможете быстро
                  обратиться в банк для блокировки карты или оспаривания
                  платежа.
                </li>
                <li className="font-light text-[16px] leading-6">
                  Заведите специальную карту для покупок в интернете. Пополняйте
                  ее лишь на ту сумму, которую собираетесь потратить на покупку.
                  В некоторых банках есть услуга создания виртуальной карты,
                  которая используется только для одной онлайн-покупки.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsPage;
