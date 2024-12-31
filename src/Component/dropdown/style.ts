import styled from 'styled-components';

export const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
`;

export const DropdownButton = styled.button`
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    width: 100%;
`;

export const DropdownContent = styled.div`
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    
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
