import React, { memo, useRef } from 'react';

// mantine
import {
  ActionIcon,
  Footer,
  MantineTheme,
  Textarea,
} from '@mantine/core';

// icons
import { IconSend } from '@tabler/icons-react';

const styles = {
  inputBox: (theme: MantineTheme) => ({
    height: 'auto',
    maxHeight: 'unset',
    [`@media (max-width: ${theme.breakpoints.xs})`]: {
      borderTop: 'none',
      backgroundColor: 'unset',
    },
  }),
  textArea: (theme: MantineTheme) => ({
    display: 'inline-block',
    verticalAlign: 'middle',
    width: 'calc(100% - 2.75rem - 1rem)',
    [`@media (max-width: ${theme.breakpoints.xs})`]: {
      width: 'calc(100% - 2.75rem)',
    },
  }),
  sendIcon: {
    display: 'inline-flex',
    verticalAlign: 'middle',
    '& > svg': {
      verticalAlign: 'middle',
    },
  },
};

const InputBox = () => {
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSend = () => {
    const message = inputRef.current && inputRef.current.value.trim();
    if (message) {
      console.log("message >> ", message)
    }
  };

  return (
    <Footer height={0} sx={styles.inputBox} p={{ xs: 'sm', sm: 'md' }}>
      <Textarea
        ref={inputRef}
        placeholder="Type your message"
        autosize
        minRows={1}
        maxRows={5}
        radius="md"
        sx={styles.textArea}
      />
      <ActionIcon
        variant="light"
        color="violet"
        size="xl"
        ml={{ xs: 'sm', sm: 'md' }}
        radius="md"
        title='Send'
        sx={styles.sendIcon}
        onClick={() => handleSend()}
      >
        <IconSend size="1rem" />
      </ActionIcon>
    </Footer>
  );
};

export default memo(InputBox);