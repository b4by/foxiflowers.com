import { forwardRef, ReactEventHandler } from "react";
import React from "react";

interface InputProps {
  name: string;
  label?: string;
  id?: string;
  type: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  rest?: any;
  min?: string;
  pattern?: string;
  icon?: string;
  readOnly?: boolean;
  value?: any;
  onClick?: ReactEventHandler;
  onChange?: ReactEventHandler;
  required?: boolean;
  step?: string;
  defaultValue?: any;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      label,
      id,
      type,
      className,
      placeholder,
      icon,
      disabled,
      readOnly,
      value,
      onClick,
      onChange,
      required,
      min,
      pattern,
      step,
      defaultValue,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        className={`relative flex flex-col flex-grow ${
          className ? className : ""
        }`}
        onClick={onClick}
      >
        {label && (
          <label
            htmlFor={id}
            className={`font-medium text-black text-[16px] leading-[24px] mb-4 cursor-pointer ${
              required && "after:content-['*'] after:ml-0.5 after:text-red-500"
            }`}
          >
            {label}
          </label>
        )}
        <div className="relative flex flex-col flex-grow">
          <input
            name={name}
            type={type}
            id={id}
            ref={ref}
            className="flex-grow bg-white p-4 h-[56px] border-2 border-[#808080] rounded-[30px] placeholder-[#BCBCBC] placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-[#F29A98] focus:border-transparent disabled:opacity-30 disabled:select-none disabled:pointer-events-none"
            placeholder={placeholder}
            pattern={pattern}
            {...rest}
            disabled={disabled}
            onChange={onChange}
            readOnly={readOnly}
            value={value}
            min={min}
            step={step}
          />
          {icon === "user" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              className="absolute top-1/2 right-[20px] transform -translate-y-1/2"
            >
              <path
                fill="#BCBCBC"
                d="M16.472 20a1 1 0 101.49-1.335L16.472 20zM6.038 18.664A1 1 0 007.528 20l-1.49-1.334zM12 20a8 8 0 01-8-8H2c0 5.523 4.477 10 10 10v-2zm-8-8a8 8 0 018-8V2C6.477 2 2 6.477 2 12h2zm8-8a8 8 0 018 8h2c0-5.523-4.477-10-10-10v2zm8 8a8 8 0 01-8 8v2c5.523 0 10-4.477 10-10h-2zm-2.038 6.665A7.982 7.982 0 0012 16v2c1.777 0 3.372.77 4.472 2l1.49-1.335zM12 16a7.983 7.983 0 00-5.962 2.665L7.528 20C8.628 18.771 10.224 18 12 18v-2zm0-3a2 2 0 01-2-2H8a4 4 0 004 4v-2zm-2-2a2 2 0 012-2V7a4 4 0 00-4 4h2zm2-2a2 2 0 012 2h2a4 4 0 00-4-4v2zm2 2a2 2 0 01-2 2v2a4 4 0 004-4h-2z"
              ></path>
            </svg>
          )}
          {icon === "phone" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              className="absolute top-1/2 right-[20px] transform -translate-y-1/2"
            >
              <path
                fill="#BCBCBC"
                d="M9.503 4.257l.928-.371-.928.371zm1.054 2.636l-.928.371.928-.371zm-.32 2.023l-.768-.64.768.64zm-.568.68l.769.641-.769-.64zm.122 2.695L9.084 13l.707-.708zm1.918 1.918l.707-.708-.707.708zm2.694.122l-.64-.769.64.769zm.681-.568l.64.769-.64-.769zm2.023-.32l.372-.929-.372.929zm2.636 1.054l-.372.929.372-.929zM21 16.354h-1 1zm0 2.751h1-1zM7.646 4a1 1 0 01.928.629l1.857-.743A3 3 0 007.646 2v2zm.928.629L9.63 7.264l1.857-.743-1.055-2.635-1.857.743zM9.63 7.264a1 1 0 01-.16 1.012l1.536 1.28a3 3 0 00.48-3.035l-1.856.743zm-.16 1.012l-.568.68 1.537 1.281.567-.68L9.47 8.275zm-.568.68A3 3 0 009.084 13l1.415-1.415a1 1 0 01-.061-1.347L8.9 8.957zM9.084 13l1.918 1.917 1.414-1.415-1.918-1.917L9.084 13zm1.917 1.917a3 3 0 004.042.183l-1.28-1.537a1 1 0 01-1.347-.06L11 14.915zm4.042.183l.681-.567-1.28-1.537-.681.567 1.28 1.537zm.681-.568a1 1 0 011.012-.16l.742-1.857a3 3 0 00-3.034.481l1.28 1.537zm1.012-.16l2.635 1.055.743-1.857-2.636-1.055-.742 1.857zm2.635 1.055a1 1 0 01.629.928h2a3 3 0 00-1.886-2.785l-.743 1.857zm.629.928v2.751h2v-2.751h-2zm0 2.751c0 .494-.4.895-.895.895v2A2.894 2.894 0 0022 19.105h-2zm-.895.895C10.763 20 4 13.237 4 4.895H2C2 14.342 9.659 22 19.105 22v-2zM4 4.895C4 4.4 4.4 4 4.895 4V2A2.895 2.895 0 002 4.895h2zM4.895 4h2.751V2H4.895v2z"
              ></path>
            </svg>
          )}
          {icon === "pin" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              className="absolute top-1/2 right-[20px] transform -translate-y-1/2"
            >
              <path
                fill="#BCBCBC"
                d="M12.398 19.804l.46.888-.46-.888zm-.796 0l-.46.888.46-.888zM18 11c0 2.146-1.092 3.916-2.455 5.29-1.362 1.374-2.91 2.265-3.607 2.626l.92 1.776c.787-.408 2.539-1.412 4.107-2.993S20 13.87 20 11h-2zm-6-6a6 6 0 016 6h2a8 8 0 00-8-8v2zm-6 6a6 6 0 016-6V3a8 8 0 00-8 8h2zm6.062 7.916c-.696-.361-2.245-1.252-3.607-2.625C7.092 14.916 6 13.146 6 11H4c0 2.87 1.467 5.118 3.035 6.699 1.568 1.581 3.32 2.585 4.107 2.993l.92-1.776zm-.124 0a.138.138 0 01.062-.014c.027 0 .049.007.062.014l-.92 1.776c.541.28 1.175.28 1.716 0l-.92-1.776zM14 11a2 2 0 01-2 2v2a4 4 0 004-4h-2zm-2-2a2 2 0 012 2h2a4 4 0 00-4-4v2zm-2 2a2 2 0 012-2V7a4 4 0 00-4 4h2zm2 2a2 2 0 01-2-2H8a4 4 0 004 4v-2z"
              ></path>
            </svg>
          )}
        </div>
      </div>
    );
  }
);
