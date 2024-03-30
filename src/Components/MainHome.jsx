import { Link } from "react-router-dom";
import { NavDropdown } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import "../css/MainHome.css";

const MainHome = () => {

  const [t, i18n] = useTranslation("global")

  return (
    <div className="mainBody">
      <br />
      <div className="text-welcome">
        <div>
          <h3 className="wlc">{t("header.title")}</h3>
        </div>
        <p className="about">{t("header.about")}</p>
      </div>
      <div className="buttons">
        <div className="button">
          <Link to={"/pokemones"} className="button-text text-decoration-none">
          {t("header.btn-text")}
          </Link>
        </div>
      </div>
      <br />
      <hr />
      <div className="data">
        <h3>{t("main.subtitle")}</h3>
        <br />
        <p>
          <span className="title-data">» {t("main.t-data#1")}</span>
        </p>
        <p className="text-data">{t("main.about-data#1")}</p>
        <p>
        <span className="title-data">» {t("main.t-data#2")}</span>
        </p>
        <p className="text-data">{t("main.about-data#2")}</p>
        <p>
        <span className="title-data">» {t("main.t-data#3")}</span>
        </p>
        <p className="text-data">{t("main.about-data#3")}</p>
        <p>
          <span className="title-data">» {t("main.t-data#4")}</span>
        </p>
        <p className="text-data">{t("main.about-data#4")}</p>
        <p>
          <span className="title-data">» {t("main.t-data#5")}</span>
        </p>
        <p className="text-data">{t("main.about-data#5")}</p>
      </div>
      <br />
      <div className="settings">
        <i className="icon fa-solid fa-gear"></i> 
        <NavDropdown title={t("main.settings")} id="collapsible-nav-dropdown">
              <NavDropdown.Item onClick={() => i18n.changeLanguage("en")}>Change to English</NavDropdown.Item>
              <NavDropdown.Item onClick={() => i18n.changeLanguage("es")}>Cambiar a Español</NavDropdown.Item>
            </NavDropdown>
         </div>
         <br />
    </div>
  );
};

export default MainHome;
