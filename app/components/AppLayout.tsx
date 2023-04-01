'use client'
import React, { useState, ReactNode, useCallback, useEffect } from 'react';
import { usePathname } from 'next/navigation';

// mantine
import {
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

// local
import NavBar from './NavBar';
import Header from './NavBar/Header';

type AppLayoutProps = {
  children: ReactNode;
};

const AppLayout = (props: AppLayoutProps) => {
  const pathname = usePathname();
  const theme = useMantineTheme();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen((oldValue) => !oldValue);
  }, []);


  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navigationPanel = (
    <div
      style={{
        width: isMobile ? "100%" : '300px',
        display: isMobile ? (isMenuOpen ? "block" : "none") : "block",
      }}
    >
      <NavBar
        isMobile={isMobile}
        header={<Header isMenuOpen={isMenuOpen} isMobile={isMobile} handleMenuToggle={handleMenuToggle} />}
      />
    </div>
  );

  const headerBar = isMobile ? (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          padding: '16px 16px 0px',
          zIndex: 2,
          backgroundColor: isMenuOpen ? 'transparent' : (theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white),
        }}
      >
        <Header isMenuOpen={isMenuOpen} isMobile={isMobile} handleMenuToggle={handleMenuToggle} />
      </div>
      <div style={{ height: '53px' }} />
    </div>
  ) : null;

  const centerContent = (
    <div style={{ flexGrow: 1 }}>
      {headerBar}
      <div
        style={{
          display: isMobile ? (isMenuOpen ? 'none' : 'block') : 'block',
          height: isMobile ? 'calc(100% - 53px)' : '100%',
        }}
      >
        {props.children}
      </div>
    </div>
  );

  return (
    <div style={{
      display: 'flex',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white,
      height: '100%',
    }}>
      {navigationPanel}
      {centerContent}
    </div>
  );
}

export default AppLayout;