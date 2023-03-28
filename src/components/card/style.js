import styled, { css } from "styled-components";
import { PM_GRADE } from "../../constants";
import { AiFillStar } from "react-icons/ai";

// Wrapper
export const Card = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  min-width: 250px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  color: #fff;
  border-radius: 8px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  ${({ theme, grade }) => theme.status[PM_GRADE.get(grade).status]};
`;

// Location
export const City = styled.span``;

export const Station = styled.span``;

export const Location = styled.h3`
  display: flex;
  gap: 10px;
  align-self: flex-start;
  align-items: center;
  ${City} {
    font-size: 12px;
    font-weight: lighter;
  }
  ${Station} {
    font-size: 18px;
    font-weight: bolder;
  }
`;

// Grade
export const Grade = styled.div`
  mix-blend-mode: lighten;
  background-color: #fff;
  padding: 16px;
  color: black;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bolder;
`;

// Value
export const Value = styled.div`
  font-size: 14px;
`;

// Time
export const Time = styled.div`
  font-size: 12px;
`;

// Favorite Icon
export const FavoriteIcon = styled(AiFillStar)`
  position: absolute;
  top: 8px;
  right: 16px;
  font-size: 22px;
  stroke-width: 6rem;
  stroke: #fff;
  cursor: pointer;
  transition: color 0.1s, stroke 0.1s;
  ${({ favorite }) => css`
    color: ${favorite === "true" ? "#f2e54e" : "transparent"};
  `}
`;
