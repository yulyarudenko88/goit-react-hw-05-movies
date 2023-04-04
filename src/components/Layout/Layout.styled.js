import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  position: relative;
`;

export const MainContent = styled.main`
  min-height: calc(100vh - 130px);
  padding-bottom: 48px;
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
