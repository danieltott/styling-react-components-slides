import React, { Fragment } from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
  width: calc(100vw - 4em);
  height: calc(100vh - 4em);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const Footer = styled.footer`
  color: #333;
  padding: 30px 100px;
  text-align: right;
  width: calc(100vw - 4em);
  border-top: 1px solid #dc5f53;
  display: flex;
  justify-content: space-between;

  > span {
    font-size: 14px;
  }
`;

const Layout = ({ children }) => (
  <Fragment>
    <Wrapper>{children}</Wrapper>
    <Footer>
      <span>Cleveland React</span>
      <span>@DanielTOtt</span>
    </Footer>
  </Fragment>
);

export default Layout;
