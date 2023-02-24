import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { NoSaved, Span1 } from "../components/showProduct/ShowProduct.styled";

export default function NotFound () {
    const { t } = useTranslation();

    return (
        <NoSaved>
            <p>{t('notFound.text')}</p>
            <p><NavLink to={'/'}><Span1>{t('notFound.goToMain')}</Span1></NavLink></p>
        </NoSaved>
    );
}