import { CrossIcon } from "@/common/icons/CrossIcon/CrossIcon";
import { Input } from "@/ui/Input/Input";
import { closeModal } from "@/store/reducers/modalSlice";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { setCredentials } from "@/store/reducers/authSlice";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "@/store/services/auth.api";
import { useForm } from "react-hook-form";
import SignUpModal from "../SignUpModal/SignUpModal";
import { openModal } from "../../store/reducers/modalSlice";
import React from "react";

const SignInModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginUser, { isLoading, isError, error }] = useLoginUserMutation();

  const validationSchema = Yup.object().shape({
    identifier: Yup.string()
      .email("Введите корректный email")
      .required("Введите email"),
    password: Yup.string()
      .required("Введите пароль")
      .min(6, "Пароль должен быть не менее 6 символов"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm(formOptions);

  const onSubmit = async (data) => {
    try {
      const user = await loginUser(data).unwrap();
      dispatch(setCredentials(user));
      localStorage.setItem("jwt", user.jwt);
      dispatch(closeModal());
      navigate("/");
    } catch (err) {}
  };

  return (
    <div className="relative w-[620px] p-[40px] shadow-primary bg-white rounded-3xl">
      <button onClick={() => dispatch(closeModal())} type="button">
        <CrossIcon styles="absolute top-[40px] right-[40px] cursor-pointer hover:scale-110 transition ease-in" />
      </button>
      <h3 className="font-bold text-[24px] leading-none mb-6">Войти</h3>
      <div className="flex space-x-4 mb-8">
        <button
          type="button"
          className="text-[16px] leading-none text-[#36BDAF] underline pointer-events-none"
        >
          Войти
        </button>
        <button
          type="button"
          className="text-[16px] leading-none text-[#BCBCBC] underline"
          onClick={() => dispatch(openModal(<SignUpModal />))}
        >
          Зарегистрироваться
        </button>
      </div>
      <form className="flex flex-col gap-y-4" onSubmit={handleSubmit(onSubmit)}>
        <Input type="email" placeholder="Email" {...register("identifier")} />
        <Input type="password" placeholder="Пароль" {...register("password")} />
        <button className="bg-[#36BDAF] border-[2px] border-[#36BDAF] text-white h-[56px] leading-[56px] text-center rounded-2xl uppercase">
          Войти
        </button>
      </form>
    </div>
  );
};

export default SignInModal;
