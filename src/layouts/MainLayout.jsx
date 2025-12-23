import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container } from "../styles/style";

function MainLayout() {
  const { t } = useTranslation();
  return (
    <>
      <navbar>Navbar</navbar>
      <main>
        <Outlet />
      </main>
      <footer>Foouter</footer>
    </>
  );
}

export default MainLayout;
