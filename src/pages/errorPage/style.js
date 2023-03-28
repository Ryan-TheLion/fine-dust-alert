import styled from "styled-components";
import { BiError } from "react-icons/bi";
import { MdRefresh } from "react-icons/md";

export const ErrorIcon = styled(BiError)`
  font-size: 60px !important;
  color: red;
`;

export const RefreshIcon = styled(MdRefresh)`
  font-size: 20px !important;
  cursor: pointer;
`;

export const ErrorPage = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 400px;
  border: 1px solid transparent;
  border-radius: 8px;
  margin: 120px auto 0;
  padding: 20px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  ${RefreshIcon} {
    position: absolute;
    right: 12px;
    top: 12px;
  }
`;

export const ErrorHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  font-size: 1.5em;
`;

export const ErrorContent = styled.pre`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  text-align: center;
`;
