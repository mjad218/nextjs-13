import { FC, ReactNode } from "react";
import Layout from "../layout/Layout";
import { getAuthenticated } from "../services";
import "../styles/globals.css";
type IProps = {
  children: ReactNode;
};
const getUser = async () => {
  try {
    const user = await getAuthenticated();
    return user;
  } catch (e) {
    return null;
  }
};
const RootLayout = async (props) => {
  const children = props?.children;

  const user = await getUser();
  return (
    <html lang="ar">
      <body>
        <Layout user={user}>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
