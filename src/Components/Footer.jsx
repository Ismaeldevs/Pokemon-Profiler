import "../css/Footer.css";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'

const Footer = () => {

  const [t, i18n] = useTranslation("global")

  return (
    <div className="container-fluid">
      <div className="row p-5 text-white" id="bg-footer">
        <div className="col-xs-12 col-md-6 col-lg-3">
          <p className="h3">{t("footer.title-about")}</p>
          <p>
          {t("footer.about")}
          </p> 
        </div>

        <div className="ml-5 col-xs-12 col-md-6 col-lg-2">
          <p className="h5">{t("footer.shortcuts")}</p>
          <div className="mb-2">
            <i className="fa-solid fa-house"></i>
            <a
              className="text-secondary text-decoration-none"
              href="/"> {t("footer.shortcut#1")}</a>
          </div>
          <div className="mb-2">
            <i className="fa-solid fa-book-open"></i>
            <a className="text-secondary text-decoration-none" href="/pokemones"> {t("footer.shortcut#2")}</a>
          </div>
        </div>

        <div className="ml-3 col-xs-12 col-md-6 col-lg-3">
          <p id="redes" className="h5">{t("footer.social-media")}</p>
          <div className="mb-2">
          <i className="fa-brands fa-instagram"></i>
            <a className="text-secondary text-decoration-none" href="https://www.instagram.com/ismachz_/" target="_blank"> {t("footer.net#1")}</a>
          </div>
          <div className="mb-2">
            <i className="fa-brands fa-github"></i>
            <a className="text-secondary text-decoration-none" href="https://github.com/IsmaDevs"> {t("footer.net#2")}</a>
          </div>
        </div>

        <div className="ml-5 col-xs-12 col-md-6 col-lg-3">
          <p className="h5"><i className="fa-solid fa-code text-info"></i> {t("footer.developer")}</p> 
          <p>
            {t("footer.about-dev")}
            <Link className="text-decoration-none" to={"https://www.instagram.com/ismachz_/"} target="_blank"> {t("footer.btn-dev")}</Link>
          </p>
          <br />
          <br />
        </div>

        <div className="col-xs-12">
          <p className="h5 text-white text-center">
            © {t("footer.reserved")}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
