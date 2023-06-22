import { Input } from "@/ui/Input/Input";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { changeAddress } from "../../../store/reducers/address.slice";
import { useTypedSelector } from "../../../store/store";
import React from "react";

export const AddressForm = () => {
  const dispatch = useDispatch();
  const { register } = useForm();

  const { address } = useTypedSelector((state) => state);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(changeAddress({ [name]: value }));
  };

  return (
    <>
      <div className="relative flex gap-x-4">
        <Input
          type="text"
          placeholder="Введите адрес доставки"
          icon="pin"
          name="address"
          onChange={(e) => handleChange(e)}
        />
        {/* {address.address === "" && (
          <span className="absolute -bottom-5 left-4 text-xs text-red-500">
            Введите адрес
          </span>
        )} */}
      </div>
      <div className="relative">
        <Input
          type="text"
          placeholder="Кв./оф./этаж/подъезд"
          name="additional_info"
          onChange={(e) => handleChange(e)}
        />
        {/* {address.additional_info === "" && (
          <span className="absolute -bottom-5 left-4 text-xs text-red-500">
            Введите номер подъезда, этаж и номер квартиры
          </span>
        )} */}
      </div>
      <div className="flex flex-col gap-y-3">
        <Input
          type="text"
          name="comment"
          placeholder="Комментарий для курьера"
          onChange={(e) => handleChange(e)}
        />
      </div>
    </>
  );
};
