import { useTranslation } from 'react-i18next';
import { Languages, LangButton } from "./Header.styled";

export default function LanguageBox ({home}) {
    
    const { i18n } = useTranslation();

    const lngs = {
        ua: { nativeName: 'УКР' },
        en: { nativeName: 'ENG' }
    };

    return (<Languages position={home && 'true'}>
        {Object.keys(lngs).map((lng) => (
            <LangButton 
                key={lng} 
                active={i18n.resolvedLanguage === lng ? 'true' : 'false'} 
                type="submit" 
                onClick={() => i18n.changeLanguage(lng)}
                position={home && 'true'}>
                {lngs[lng].nativeName}
            </LangButton>
        ))}
    </Languages>);
}