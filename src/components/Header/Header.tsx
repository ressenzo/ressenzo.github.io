import { useEffect, useState } from "react";
import "./Header.css";
import HeaderModel from "../../shared/header";
import datas from "../../shared/data";
import LanguageModel from "../../shared/language";

export default function Header({ language }: LanguageModel) {

    const [info, setInfo] = useState<HeaderModel | undefined>(undefined);

    useEffect(() => {
        let selected = datas.find(x => x.language === language);
        if (selected == null)
            selected = datas.find(x => x.language === "en");
        setInfo(selected?.header);
    }, [language])

    return (
        <>
            <div className="d-flex align-items-center vh-100">
                <div className="d-none d-lg-block">
                    <h1>Renan Silva - <span className="header-place align-middle">Belo Horizonte, MG - {info?.country} (GMT-3)</span></h1>
                    <h2 className="display-1">{info?.role}</h2>
                </div>
                <div className="d-block d-lg-none">
                    <h1 className="mb-0">Renan Silva</h1>
                    <p className="fs-4 header-place-sd">Belo Horizonte, MG - {info?.country} (GMT-3)</p>
                    <h2 className="display-1">{info?.role}</h2>
                </div>
            </div>
        </>
    );
}
