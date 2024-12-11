import styled from "styled-components";
export const TableContainer = styled.div`
  .ant-pagination {
    justify-content: flex-end;
    margin-top: 20px;
  }

  .ant-pagination-prev .ant-pagination-item-link,
  .ant-pagination-next .ant-pagination-item-link {
    border-radius: 39px;
    border-color: #bdbdbd;
  }

  .ant-pagination-item {
    border-radius: 39px;
    border-color: #bdbdbd;
  }
  .ant-pagination-item-active {
    background-color: #f07525;
    color: #fff;
    border: none;
  }
`;
