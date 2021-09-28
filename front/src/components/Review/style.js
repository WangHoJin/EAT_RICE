import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InfoContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  .image {
    width: 80px;
    img {
      width: 60px;
      height: 60px;
      object-fit: cover;
      border-radius: 100%;
    }
  }
  .info {
    flex-grow: 1;
    .name {
      font-size: 18px;
    }
    .store {
      font-size: 14px;
      color: ${colors.gray};
    }
    section {
      display: flex;
      gap: 10px;
      font-size: 14px;
    }
  }
`;
export const ImageContainer = styled.div`
  width: 100%;
  overflow: auto;
  gap: 10px;
  display: flex;
  margin-bottom: 20px;
  .item {
    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
    }
  }
`;
export const Content = styled.div``;
