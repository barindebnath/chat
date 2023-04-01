'use client'
import React from 'react';

// mantine
import { useForm } from '@mantine/form';
import {
  Text,
  TextInput,
  PasswordInput,
  Button,
} from '@mantine/core';

// local
import { signIn } from '../services/user';

const LoginPage = () => {

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

  const handleSubmit = async (values: {
    email: string;
    password: string;
  }) => {
    const [data, error] = await signIn(values.email, values.password);
    console.log('data >> ', data)
    console.log('error >> ', error)
  };

  return (
    <div style={{ padding: '60px 16px 0px' }}>
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
      <form
        style={{
          maxWidth: '400px',
          margin: 'auto',
          paddingTop: '48px',
        }}
        onSubmit={form.onSubmit((values) => handleSubmit(values))}
      >
        <TextInput
          label="Email"
          placeholder="Enter your email"
          {...form.getInputProps('email')}
          size="md"
          style={{ marginBottom: '16px' }}
        />
        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          {...form.getInputProps('password')}
          size="md"
          style={{ marginBottom: '16px' }}
        />
        <Button
          type="submit"
          variant="gradient"
          gradient={{ from: 'violet', to: 'purple' }}
          size="md"
          style={{ marginTop: '12px', width: '100%' }}
        >
          Sign In
        </Button>
      </form>
    </div>
  )
}

export default LoginPage;