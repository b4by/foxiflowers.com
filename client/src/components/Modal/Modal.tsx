import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import {
  closeModal,
  selectComponentName,
  selectIsOpen,
} from "@/store/reducers/modalSlice";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import { isMobile, isBrowser } from "react-device-detect";
import React from "react";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const Modal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsOpen);
  const componentName = useSelector(selectComponentName);

  const ref = useRef(null);

  const handleClickOutside = (e) => {
    if (ref.current && ref.current.contains(e.target)) {
      return;
    }
    dispatch(closeModal());
  };

  useOnClickOutside(ref, handleClickOutside);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "17px";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0";
    }
  }, [isOpen]);

  const componentHandler = () => {
    return componentName;
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-[#808080] backdrop-blur-[10px] bg-opacity-30 z-[105]"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100]"
            ref={ref}
            onClick={(e) => handleClickOutside(e)}
          >
            {componentHandler()}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
