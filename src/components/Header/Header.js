import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <DesktopHeader>
            <Logo />
          </DesktopHeader>
          <ActionGroup>
            <UserButton>
              <User size={24} />
            </UserButton>
            <DesktopSubscribe>
              <Button>Subscribe</Button>
              <Login href="">Already a subscriber?</Login>
            </DesktopSubscribe>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MobileHeader>
        <Logo />
      </MobileHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    background: var(--color-gray-100);
    color: var(--color-gray-900);
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const UserButton = styled.button`
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const DesktopSubscribe = styled.div`
  display: none;
  place-content: center;
  @media ${QUERIES.laptopAndUp} {
    display: grid;
  }
`;

const Login = styled.a`
  font-size: calc(14/16 * 1rem);
  text-align: center;
  font-style: italic;
  line-height: calc(22/16 * 1rem);
  text-decoration-line: underline;
`;

const MobileHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const DesktopHeader = styled(MaxWidthWrapper)`
  display: none;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

export default Header;
