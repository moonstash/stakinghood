import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import "modern-normalize";
import "typeface-inter";
import "../../styles/global.css";

import Theme from "../Theme";
import Corner from "../Corner";

const Container = styled.div`
  display: grid;
  justify-items: center;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  max-width: 440px;
  width: 100%;
`;

const Layout = ({ children }) => (
  <Theme>
    <>
      <Corner />
      <Container>
        <Wrapper>{children}</Wrapper>
      </Container>
    </>
  </Theme>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
