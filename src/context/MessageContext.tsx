import React, { createContext, useState, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const messageTime = 3000;

export const MessageContext = createContext<any>({});

export const useMessageContext = () => {
  const context = useContext(MessageContext);
  return context;
}

export const MessageContextProvider = ({ children }: any) => {
  const notifyError = (msg: String) => toast.error(msg);
  const notifyInfo = (msg: String) => toast.info(msg)

  const value = { notifyError, notifyInfo };

  return (
    <MessageContext.Provider value={value}>
      {children}
      <ToastContainer
        position="top-center"
        pauseOnHover={false}
        autoClose={messageTime}
        draggable={false}
        closeOnClick={false}
        closeButton={false}
        hideProgressBar={false}
        bodyClassName="toasterFontStyle"
        limit={1}
      />
    </MessageContext.Provider>
  );
};
