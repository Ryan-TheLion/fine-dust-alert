import React from "react";
// import { ReactComponent as LoadingSVG } from "../../spinner.svg";
import * as Styled from "./style";
import { useOutletContext } from "react-router-dom";

function LoadingPage() {
  const { dustList, ...sizeContext } = useOutletContext();

  return (
    <Styled.LoadingPage {...sizeContext}>
      <img src="/assets/spinner.svg" alt="loading" />
    </Styled.LoadingPage>
  );
}

export default LoadingPage;
