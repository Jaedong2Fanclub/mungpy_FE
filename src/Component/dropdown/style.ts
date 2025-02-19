import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  border: 1px solid #e8e8e8;
  border-radius: 10px;
`;

export const DropdownButton = styled.button`
  background-color: #fff;
  border: none;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  border-radius: 10px;
  text-align: left;
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  width: 100%;
  border-radius: 10px;

  ${DropdownContainer}:hover & {
    display: block;
  }
`;

export const DropdownItem = styled.div`
  padding: 12px 16px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;
