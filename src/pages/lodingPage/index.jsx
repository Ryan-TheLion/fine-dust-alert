import React from "react";
import { ReactComponent as LoadingSVG } from "../../assets/spinner.svg";
import * as Styled from "./style";
import { useOutletContext } from "react-router-dom";

function LoadingPage() {
  const { dustList, ...sizeContext } = useOutletContext();

  return (
    <Styled.LoadingPage {...sizeContext}>
      <LoadingSVG />
    </Styled.LoadingPage>
  );
}

export default LoadingPage;
