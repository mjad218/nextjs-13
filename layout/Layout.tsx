"use client";

import { FC, ReactNode, useCallback, useState } from "react";

import { UserContext } from "../context/UserContext";
import User from "../types/user.type";

type IProps = {
  user: User;
  children: ReactNode;
};
const Layout: FC<IProps> = (props) => {
  const { children } = props;
  let [user, setUser] = useState(props?.user ? props?.user : null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>{children}</div>
    </UserContext.Provider>
  );
};

export default Layout;
