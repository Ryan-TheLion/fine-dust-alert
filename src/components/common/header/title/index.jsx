import React, { useEffect } from "react";
import * as Styled from "./style";

function Title({ metaTitle, titleContent, ...props }) {
  useEffect(() => {
    document.querySelector("title").textContent = metaTitle;
  }, [metaTitle]);

  return <Styled.Title {...props}>{titleContent}</Styled.Title>;
}

export default Title;
