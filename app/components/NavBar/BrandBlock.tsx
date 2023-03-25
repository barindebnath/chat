import React, { memo } from 'react';
import Link from 'next/link';

// mantine 
import {
  Group,
  ActionIcon,
  useMantineColorScheme,
  Box,
  rem,
  useMantineTheme,
} from '@mantine/core';

// icons
import {
  IconSun,
  IconMoonStars,
  IconMessage,
} from '@tabler/icons-react';

const BrandBlock = () => {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Box
      sx={(theme) => ({
        paddingLeft: theme.spacing.xs,
        paddingRight: theme.spacing.xs,
        paddingBottom: theme.spacing.md,
        borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
      })}
    >
      <Group position="apart">
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
    </Box>
  );
}

export default memo(BrandBlock);