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
    width: 70px;
    display: flex;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 100%;
    }
  }
  .info {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 3px;
    .name {
      font-size: 16px;
    }
    .store {
      cursor: ${(props) => (props.storeClick ? "pointer" : "default")};
      font-size: 14px;
      color: ${colors.gray};
    }
    section {
      display: flex;
      gap: 10px;
      font-size: 12px;
      color: ${colors.gray};
      .buttons {
        display: flex;
        gap: 5px;
        button {
          cursor: pointer;
          font-size: 12px;
        }
        .delete {
          color: ${colors.red};
        }
      }
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
export const Content = styled.div`
  font-size: 14px;
`;
