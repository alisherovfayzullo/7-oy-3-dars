import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

function MainLayout() {
  const { t } = useTranslation();
  return (
    <>
      <navbar>Navbar</navbar>
      <main>
        <h1>{t("Welcome to React")}</h1>
        <Outlet />
      </main>
      <footer>Foouter</footer>
    </>
  );
}

export default MainLayout;
