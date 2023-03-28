import styled, { css } from "styled-components";
import { AiFillNotification } from "react-icons/ai";

export const NotiIcon = styled(AiFillNotification)`
  font-size: 30px !important;
  color: #e0d358;
`;

export const FarvoritesPage = styled.div`
  ${({ isEmpty, mobile, tablet, pc }) =>
    isEmpty
      ? css`
          position: fixed;
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          ${() => {
            if (mobile || tablet) {
              return css`
                height: 100vh;
              `;
            }
            if (pc) {
              return css`
                height: calc(100vh - 130px);
              `;
            }
          }}
        `
      : css`
          maring-top: 80px;
        `}
`;

export const EmptyContentWrapper = styled.div`
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  width: 250px;
  height: 250px;
  display: flex;
  gap: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
