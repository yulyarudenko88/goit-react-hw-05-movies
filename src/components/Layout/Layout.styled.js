import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  position: relative;
`;

export const MainContent = styled.main`
  min-height: calc(100vh - 128px);
  padding-bottom: 50px;
`;

export const Footer = styled.footer`
  padding: 12px;
  text-align: center;
  text-transform: uppercase;
  background-color: #307848;
  color: white;
  position: absolute;
  bottom: 0;
  width: 100%;
`;
