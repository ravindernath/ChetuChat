import React, { createContext, useContext, useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

const ChatContext = createContext();

const ChatProvider = ({children}) => {
    const [user, setUser] = useState();
    const [selectdChat, setSelectedChat] = useState();
    const [caths, setChats] = useState();

    const history = useHistory();

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        setUser(userInfo);
    
        // if (!userInfo) history.push("/");

        // if (!userInfo) {
        //     history.push("/");
        // }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [history]);

    return(
        <ChatContext.Provider value={{user, setUser, selectdChat, setSelectedChat, caths, setChats}}>
            {children}
        </ChatContext.Provider>
    );
};

export const ChatState = () => {
    return useContext(ChatContext);
  };
  
  export default ChatProvider;