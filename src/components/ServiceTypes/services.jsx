import { useTranslation } from "react-i18next";
import klapa from "../../assets/png/klapa.jpg";
import burgalar from "../../assets/png/burgalar.jpg";
import chayon from "../../assets/png/chayon.jpg";
import kemiruvchilar from "../../assets/png/kemiruvchilar.jpg";
import tarakan from "../../assets/png/tarakan.jpg";

export const getTranslatedServices = () => {
  const { t } = useTranslation();

  return [
    {
      imgSrc: klapa,
      heading: t("servicesTypes.0.heading"),
      title: t("servicesTypes.0.title"),
    },
    {
      imgSrc: tarakan,
      heading: t("servicesTypes.1.heading"),
      title: t("servicesTypes.1.title"),
    },
    {
      imgSrc: chayon,
      heading: t("servicesTypes.2.heading"),
      title: t("servicesTypes.2.title"),
    },
    {
      imgSrc: kemiruvchilar,
      heading: t("servicesTypes.3.heading"),
      title: t("servicesTypes.3.title"),
    },
    {
      imgSrc: burgalar,
      heading: t("servicesTypes.4.heading"),
      title: t("servicesTypes.4.title"),
    },
  ];
};
