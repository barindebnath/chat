import React, { memo } from 'react';

// mantine
import { Navbar } from '@mantine/core';

// local
import UserBlock from './UserBlock';
import BrandBlock from './BrandBlock';

type NavBarProps = {
  opened: boolean;
};

const NavBar = (props: NavBarProps) => {

  return (
    <Navbar p="md" hiddenBreakpoint="sm" hidden={!props.opened} width={{ sm: 200, lg: 300 }}>
      <Navbar.Section>
        <BrandBlock />
      </Navbar.Section>
      <Navbar.Section grow mt="md">
        <h1>1</h1>
        <h1>2</h1>
        <h1>3</h1>
        <h1>4</h1>
      </Navbar.Section>
      <Navbar.Section>
        <UserBlock />
      </Navbar.Section>
    </Navbar>
  )
}

export default memo(NavBar);