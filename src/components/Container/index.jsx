/* eslint-disable react/prop-types */
import { Main } from "../Main";
import { SeachForm } from "../SearchForm";
import { Sort } from "../Sort";
import { ContainerStyle, ContainerStyleDiv } from "./Container.styles";

export const Container = () => {
  return (
    <ContainerStyle>
      <ContainerStyleDiv>
        <SeachForm />
        <Sort />
      </ContainerStyleDiv>

      <Main />
    </ContainerStyle>
  );
};
