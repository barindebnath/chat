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

const SignUpPage = () => {
  const theme = useMantineTheme();

  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
    validate: {
      firstName: (value) => !value.trim(),
      lastName: (value) => !value.trim(),
      email: (value) => /^\S+@\S+$/.test(value) ? null : 'Please enter a valid email',
      password: (value) => value.trim().length > 5 ? null : 'Password must be at least 6 characters',
    }
  });

  const handleSubmit = (values: {
    firstName: string;
    lastName: string;
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
          gradient={{ from: 'indigo', to: 'cyan' }}
          style={{ letterSpacing: '2px', lineHeight: 1.2 }}
        >
          Join Us Today
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
          label="First name"
          placeholder="Enter your first name"
          {...form.getInputProps('firstName')}
          size="md"
          style={{ marginBottom: theme.spacing.md }}
        />
        <TextInput
          label="Last name"
          placeholder="Enter your last name"
          {...form.getInputProps('lastName')}
          size="md"
          style={{ marginBottom: theme.spacing.md }}
        />
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
          gradient={{ from: 'indigo', to: 'cyan' }}
          size="md"
          style={{ marginTop: theme.spacing.sm, width: '100%' }}
        >
          Create Account
        </Button>
      </form>
    </AppLayout>
  )
}

export default SignUpPage;