'use client'
import React from 'react';

// mantine
import { useForm } from '@mantine/form';
import {
  Text,
  TextInput,
  PasswordInput,
  Button,
  useMantineTheme,
} from '@mantine/core';

// local
import AppLayout from '../components/AppLayout';

const LoginPage = () => {
  const theme = useMantineTheme();

  const form = useForm({
    initialValues: {
      email: '',
      password: ''
    },
    validate: {
      email: (value) => /^\S+@\S+$/.test(value) ? null : 'Please enter a valid email',
      password: (value) => value.trim() ? null : true,
    }
  });

  const handleSubmit = (values: {
    email: string;
    password: string;
  }) => {
    console.log('value >> ', values)
  };

  return (
    <AppLayout
      header={
        <Text
          size="xl"
          weight={700}
          align="center"
          variant="gradient"
          gradient={{ from: 'violet', to: 'purple' }}
          style={{ letterSpacing: '2px', lineHeight: 1.2 }}
        >
          Welcome Back
        </Text>
      }
    >
      <form
        style={{
          maxWidth: '400px',
          margin: 'auto',
          paddingTop: '24px',
        }}
        onSubmit={form.onSubmit((values) => handleSubmit(values))}
      >
        <TextInput
          label="Email"
          placeholder="Enter your email"
          {...form.getInputProps('email')}
          size="md"
          style={{ marginBottom: theme.spacing.md }}
        />
        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          {...form.getInputProps('password')}
          size="md"
          style={{ marginBottom: theme.spacing.md }}
        />
        <Button
          type="submit"
          variant="gradient"
          gradient={{ from: 'violet', to: 'purple' }}
          size="md"
          style={{ marginTop: theme.spacing.sm, width: '100%' }}
        >
          Sign In
        </Button>
      </form>
    </AppLayout>
  )
}

export default LoginPage;