import React, { memo, useState } from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation";

// mantine
import {
  UnstyledButton,
  Group,
  Avatar,
  Text,
  Box,
  useMantineTheme,
  rem,
  Button,
} from '@mantine/core';

// icons
import {
  IconChevronRight,
  IconChevronLeft,
} from '@tabler/icons-react';

const UserBlock = () => {
  const theme = useMantineTheme();
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  const [user, setUser] = useState(false);

  return (
    <Box
      sx={{
        paddingTop: theme.spacing.md,
      }}
    >
      {user ? (
        <UnstyledButton
          sx={{
            display: 'block',
            width: '100%',
            paddingTop: '4px',
            color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
          }}
          onClick={() => setUser((s) => !s)}
        >
          <Group>
            <Avatar
              src='https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80'
              radius='xl'
            />
            <Box sx={{ flex: 1 }}>
              <Text size='sm' weight={500}>
                Amy Horsefighter
              </Text>
              <Text color='dimmed' size='xs'>
                ahorsefighter@gmail.com
              </Text>
            </Box>

            {theme.dir === 'ltr' ? (
              <IconChevronRight size={rem(18)} />
            ) : (
              <IconChevronLeft size={rem(18)} />
            )}
          </Group>

        </UnstyledButton>
      ) : isLoginPage ? (
        <Link href="/signup" style={{ textDecoration: 'none' }}>
          <Button
            variant='gradient'
            gradient={{ from: 'indigo', to: 'cyan' }}
            color='violet'
            radius='md'
            size='md'
            fullWidth
            sx={{
              marginTop: '2px',
            }}
            onClick={() => setUser((s) => !s)}
          >
            Create Account
          </Button>
        </Link>
      ) : (
        <Link href="/login" style={{ textDecoration: 'none' }}>
          <Button
            variant='gradient'
            gradient={{ from: 'violet', to: 'purple' }}
            color='violet'
            radius='md'
            size='md'
            fullWidth
            sx={{
              marginTop: '2px',
            }}
            onClick={() => setUser((s) => !s)}
          >
            Sign In
          </Button>
        </Link>
      )}
    </Box>
  );
}

export default memo(UserBlock);