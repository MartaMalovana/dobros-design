import { useState } from "react";
import { useSelector } from "react-redux";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import {
  SearchContainer,
  Form,
  Number,
  Select,
  Option,
  Label,
  LabelSelect,
  Input,
  ButtonSubmit,
  Underline,
} from "./FindProduct.styled";
import {
  CardContainer
} from "./ShowProduct.styled";
import getRegionData from "./getRegionData";
import ProductCard from "../productCard/ProductCard";
import regions from "./regions.json";

export default function FindProduct({ newData, titles }) {
  const [renderData, setRenderData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const allstate = useSelector((state) => state);
  const { t } = useTranslation();

  const find = (e) => {
    e.preventDefault();
    const data = getRegionData(e.currentTarget.category.value, allstate);
    const products = data.filter(
      (el) => el.number === e.currentTarget.number.value
    );
    // setRenderData(products);
    if (products && products.length > 0) {
      newData(products);
      // Hide titles
      titles();
    } else {
      setNotFound(true);
      newData(null);
    };
  };

  return (
    <SearchContainer>
      <Form onSubmit={find}>
        <Number>
          <Label htmlFor="number">{t("search.number")}</Label>
          <Input
            id="number"
            required
            placeholder={t("search.example")}
            pattern="[0-9]{0,6}-{0,1}\d*"
            title="Вводьте, будь-ласка, лише цифри"
            onChange={() => setNotFound(false)}
          ></Input>
          <Underline />
        </Number>
        <LabelSelect htmlFor="category">{t("search.section")}</LabelSelect>
        <Select id="category">
          <Option value="all">{t("search.category.all")}</Option>
          {regions.map((el) => (
            <Option value={el.name} key={el.name}>
              {i18next.language === "ua" ? el.content : el.contentEng}
            </Option>
          ))}
          <Option value="kozhuhy">{t("search.category.kozhuhy")}</Option>
          <Option value="golovni-ubory">
            {t("search.category.golovniUbory")}
          </Option>
          <Option value="vzuttya">{t("search.category.vzuttya")}</Option>
          <Option value="rushnyky">{t("search.category.rushnyky")}</Option>
          <Option value="svit">{t("search.category.svit")}</Option>
          <Option value="rizne">{t("search.category.rizne")}</Option>
        </Select>
        <ButtonSubmit type="submit">{t("search.button")}</ButtonSubmit>
      </Form>
      <CardContainer>
        {renderData &&
          renderData.map((el, index) => {
            return <ProductCard data={el} title index={index} />;
          })}
        {notFound && <p>{t("search.notFound")}</p>}
      </CardContainer>
    </SearchContainer>
  );
}
