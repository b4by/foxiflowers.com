import { CrossIcon } from "@/common/icons/CrossIcon/CrossIcon";
import { Input } from "@/ui/Input/Input";
import { useDispatch } from "react-redux";
import { closeModal, openModal } from "../../store/reducers/modalSlice";
import SignInModal from "../SignInModal/SignInModal";

const SignUpModal = () => {
  const dispatch = useDispatch();
  return (
    <div className="relative w-[620px] p-[40px] shadow-primary bg-white rounded-3xl">
      <button onClick={() => dispatch(closeModal())} type="button">
        <CrossIcon styles="absolute top-[40px] right-[40px] cursor-pointer hover:scale-110 transition ease-in" />
      </button>

      <h3 className="font-bold text-[24px] leading-none mb-6">
        Создать аккаунт
      </h3>
      <div className="flex space-x-4 mb-8">
        <button
          type="button"
          className="text-[16px] leading-none text-[#BCBCBC] underline"
          onClick={() => dispatch(openModal(<SignInModal />))}
        >
          Войти
        </button>
        <button
          type="button"
          className="text-[16px] leading-none text-[#36BDAF] underline pointer-events-none"
        >
          Зарегистрироваться
        </button>
      </div>
      <form className="flex flex-col gap-y-4">
        <Input placeholder="Имя и фамилия" />
        <Input placeholder="Телефон" />
        <Input placeholder="Email" />
        <Input placeholder="Пароль" />
        <button className="bg-[#36BDAF] border-[2px] border-[#36BDAF] text-white h-[56px] leading-[56px] text-center rounded-2xl uppercase">
          Создать аккаунт
        </button>
      </form>
    </div>
  );
};

export default SignUpModal;
