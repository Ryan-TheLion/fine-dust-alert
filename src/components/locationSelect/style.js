import styled from "styled-components";

export const LocationSelect = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  box-sizing: border-box;
  padding: 16px;
  select[name="sido"] {
    min-width: 100px;
    max-width: 300px;
    padding: 1rem;
    flex: 2;
    border: 1px solid;
    border-radius: 8px;
  }
  select[name="station"] {
    min-width: 50px;
    max-width: 150px;
    padding: 1rem;
    flex: 1;
    border: 1px solid;
    border-radius: 8px;
  }
`;
