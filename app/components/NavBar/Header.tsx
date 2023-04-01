import React, { memo } from 'react';
import Link from 'next/link';

// mantine 
import {
  Group,
  ActionIcon,
  useMantineColorScheme,
  useMantineTheme,
  Burger,
} from '@mantine/core';

// icons
import {
  IconSun,
  IconMoonStars,
  IconMessage,
} from '@tabler/icons-react';

type BrandBlockProp = {
  isMobile: boolean;
  isMenuOpen: boolean;
  handleMenuToggle: () => void;
};

const Header = (props: BrandBlockProp) => {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position="apart">
      {props.isMobile ? (
        <Burger
          opened={props.isMenuOpen}
          onClick={props.handleMenuToggle}
          size="sm"
          color={theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black}
        />
      ) : null}
      <Link href='/' style={{ display: 'flex' }} title='Home page'>
        <IconMessage size={37} color={theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black} />
      </Link>
      <ActionIcon
        variant="subtle"
        onClick={() => toggleColorScheme()}
        size='lg'
        title={colorScheme === 'dark' ? 'Light mode' : 'Dark mode'}
      >
        {colorScheme === 'dark' ? (
          <IconSun size="1rem" color={theme.colors.dark[0]} />
        ) : (
          <IconMoonStars size="1rem" color={theme.black} />
        )}
      </ActionIcon>
    </Group>
  );
}

export default memo(Header);