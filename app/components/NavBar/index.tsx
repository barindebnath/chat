import React, { ReactNode, memo } from 'react';

// mantine
import {
  Divider,
  useMantineTheme,
} from "@mantine/core";

// local
import UserBlock from './UserBlock';
import UserList from './UserList';

type NavBarProps = {
  isMobile: boolean;
  header: ReactNode;
};

function NavBar(props: NavBarProps) {
  const theme = useMantineTheme();

  return (
    <div
      style={{
        width: "100%",
        height: '100%',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[9] : theme.colors.gray[2],
        padding: theme.spacing.md,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {!props.isMobile ? props.header : (<div style={{ height: '53px' }} />)}
      <Divider />
      <div style={{ flexGrow: 1 }}>
        <UserList />
      </div>
      <Divider />
      <UserBlock />
    </div>
  );
}

export default memo(NavBar);
