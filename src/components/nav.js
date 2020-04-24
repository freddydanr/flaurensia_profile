import React from "react"
import styled from "styled-components"
import { Home, UserSecret, SlidersH, Briefcase } from "@styled-icons/fa-solid"
import { Leanpub } from "@styled-icons/fa-brands"
const MyNavigation = styled.header`
  width: 160px;
  position: fixed;
  top: 0;
  left: 0;
`

const NavHeader = styled.div`
  padding: 14px;
  background: var(--color-black);
  color: white;
`

const Ul = styled.ul`
  background: var(--color-black);
  height: 100%;
  padding: 0;
  margin: 0;
  list-style-type: none;
`

const Li = styled.li`
  padding: 15px;
  background: ${props => props.bg || "black"};
  color: var(--color-white);
  display: flex;
  align-items: center;
  transition: margin-right 0.25s;
  cursor: pointer;

  &:hover {
    margin-right: -9px;
  }

  & > svg {
    width: 24px;
  }
`

const Span = styled.span`
  margin-left: 8px;
`

const Navigation = () => (
  <MyNavigation>
    <NavHeader>Header</NavHeader>
    <Ul>
      <Li bg="#f5bf00">
        <Home />
        <Span>Home</Span>
      </Li>
      <Li bg="#f7941b">
        <UserSecret />
        <Span>About</Span>
      </Li>
      <Li bg="#f26422">
        <SlidersH />
        <Span>Skills</Span>
      </Li>
      <Li bg="#ec1c24">
        <Briefcase />
        <Span>Experience</Span>
      </Li>
      <Li bg="#e10337">
        <Leanpub />
        <Span>Education</Span>
      </Li>
    </Ul>
  </MyNavigation>
)

export default Navigation
