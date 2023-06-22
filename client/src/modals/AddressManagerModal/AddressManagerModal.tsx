import { closeModal, openModal } from "@/store/reducers/modalSlice";
import { useTypedSelector } from "@/store/store";
import { useDispatch } from "react-redux";
import { NewAddressModal } from "../NewAddressModal/NewAddressModal";

interface AddressItemsProps {
  address?: any;
  hide?: boolean;
}

export const AddressItem = ({ address, hide }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-semibold text-[16px] leading-none">
          {address?.address}
        </h4>
        {!hide && (
          <button
            type="button"
            onClick={() =>
              dispatch(
                openModal(<NewAddressModal address={address?.address} />)
              )
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#BCBCBC"
                d="M4 20H3a1 1 0 001 1v-1zm16 1a1 1 0 100-2v2zM4 16l-.707-.707A1 1 0 003 16h1zM14.869 5.13l-.707-.707.707.707zm2.262 0l-.707.707.707-.707zm1.738 1.737l.707-.707-.707.707zm0 2.263l-.707-.707.707.707zM8 20v1a1 1 0 00.707-.293L8 20zM19.537 7.69l.95-.308-.95.309zm0 .619l-.951-.31.95.31zM15.69 4.463l-.309-.951.309.951zm.618 0l.31-.951-.31.951zm-3.602 2.83a1 1 0 10-1.414 1.414l1.414-1.414zm2.586 5.414a1 1 0 001.414-1.414l-1.414 1.414zM4 21h16v-2H4v2zm1-1v-4H3v4h2zm-.293-3.293L15.576 5.838 14.16 4.424 3.293 15.293l1.414 1.414zM16.424 5.838l1.738 1.738 1.414-1.415-1.738-1.737-1.414 1.414zm1.738 2.586L7.292 19.293l1.415 1.414L19.576 9.838 18.16 8.424zM8 19H4v2h4v-2zM18.162 7.576c.21.21.323.325.4.414.067.08.044.071.024.01l1.902-.618a2.021 2.021 0 00-.402-.687c-.141-.166-.324-.347-.51-.534L18.16 7.576zm1.414 2.262c.186-.186.369-.368.51-.534.148-.175.308-.396.402-.686L18.586 8c.02-.062.043-.07-.025.01-.076.09-.19.204-.4.414l1.415 1.414zM18.586 8l1.902.618a2 2 0 000-1.236L18.586 8zm-3.01-2.162c.21-.21.325-.324.414-.4.08-.067.071-.044.01-.024l-.618-1.902c-.29.094-.512.254-.687.402-.165.14-.347.324-.534.51l1.415 1.414zm2.262-1.414c-.186-.186-.368-.369-.533-.51a2.02 2.02 0 00-.687-.402L16 5.414c-.061-.02-.07-.043.01.025.09.075.204.19.414.4l1.415-1.415zM16 5.414l.618-1.902a2 2 0 00-1.236 0L16 5.414zm-4.707 3.293l4 4 1.414-1.414-4-4-1.414 1.414z"
              ></path>
            </svg>
          </button>
        )}
      </div>
      <h5 className="text-[14px] leading-none text-[#BCBCBC]">
        {address?.additional_info}
      </h5>
    </div>
  );
};

export const AddressModal = () => {
  const dispatch = useDispatch();
  const { address } = useTypedSelector((state) => state);
  return (
    <div className="relative w-[620px] p-[40px] shadow-primary bg-white rounded-3xl">
      <button
        type="button"
        onClick={() => dispatch(closeModal())}
        className="absolute top-[40px] right-[40px] w-6 h-6 cursor-pointer hover:scale-110 transition ease-in"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="fill-current"
          viewBox="0 0 24 24"
        >
          <path
            stroke="#1C1E27"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18 18L6 6m12 0L6 18"
          ></path>
        </svg>
      </button>
      <h3 className="font-bold text-[24px] leading-none mb-6 uppercase">
        Адрес доставки
      </h3>
      <main className="flex flex-col gap-y-6 mb-10">
        {address?.addresses.length > 0
          ? address?.addresses.map((item, key) => (
              <AddressItem key={key} address={item} />
            ))
          : "Нет адресов"}
      </main>
      <button
        type="button"
        onClick={() => dispatch(openModal(<NewAddressModal />))}
        className="flex items-center gap-x-[10px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="#1C1E27"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 12h12m-6 6V6"
          ></path>
        </svg>
        <span className="font-semibold text-[16px] leading-none">
          Новый адрес
        </span>
      </button>
    </div>
  );
};
