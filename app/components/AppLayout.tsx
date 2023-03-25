import React, { useState, ReactNode, ReactElement } from 'react';

// mantine
import {
  AppShell,
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
  Box,
  Aside,
} from '@mantine/core';

// local
import NavBar from './NavBar';

type AppLayoutProps = {
  aside?: ReactElement;
  header?: ReactElement;
  footer?: ReactElement;
  children: ReactNode;
};

const AppLayout = (props: AppLayoutProps) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <Box>
      <AppShell
        styles={{
          // root: {
          //   maxWidth: '1440px',
          //   margin: 'auto',
          // },
          main: {
            background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={<NavBar opened={opened} />}
        header={
          <Header height={{ base: 50, md: 70 }} p="md">
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>

              <div style={{ margin: 'auto' }}>
                {props.header}
              </div>
            </div>
          </Header>
        }
        aside={
          <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
              {props.aside}
            </Aside>
          </MediaQuery>}
        footer={props.footer}
        layout="alt"
      >
        {props.children}
      </AppShell>
    </Box>
  )
}

export default AppLayout;