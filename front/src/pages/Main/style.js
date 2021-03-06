import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;
export const Wrapper = styled.div`
  width: 80vw;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 20px 20px 30px 20px;
  h1 {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 20px;
  }
`;

export const StoreList = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
`;
