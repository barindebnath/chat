'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// mantine
import { useForm } from '@mantine/form';
import {
  Text,
  TextInput,
  PasswordInput,
  Button,
  Notification,
} from '@mantine/core';
import { signUp } from '../services/user';
import { IconX } from '@tabler/icons-react';


const SignUpPage = () => {
  const { push } = useRouter();
  const [errorMsg, setErrorMsg] = useState('');

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

  const handleSubmit = async (values: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) => {
    setErrorMsg("");
    const [data, error] = await signUp(values.firstName, values.lastName, values.email, values.password);
    if (error) setErrorMsg('Bummer! Something went wrong.');

    if (data) {
      if (data.message === 'error') {
        setErrorMsg(data.data.msg || 'Bummer! Something went wrong.');
      } else {
        push('/');
      }
    }
  };

  return (
    <div style={{ padding: '60px 16px 0px' }}>
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
      <form
        style={{
          maxWidth: '400px',
          margin: 'auto',
          paddingTop: '48px',
        }}
        onSubmit={form.onSubmit((values) => handleSubmit(values))}
      >
        <TextInput
          label="First name"
          placeholder="Enter your first name"
          {...form.getInputProps('firstName')}
          size="md"
          style={{ marginBottom: '16px' }}
        />
        <TextInput
          label="Last name"
          placeholder="Enter your last name"
          {...form.getInputProps('lastName')}
          size="md"
          style={{ marginBottom: '16px' }}
        />
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
          gradient={{ from: 'indigo', to: 'cyan' }}
          size="md"
          style={{ marginTop: '12px', width: '100%', marginBottom: '28px' }}
        >
          Create Account
        </Button>

        {errorMsg ? (
          <Notification
            icon={<IconX size="1.1rem" />}
            color="red"
            onClose={() => setErrorMsg("")}
          >
            {errorMsg}
          </Notification>
        ) : null}

      </form>
    </div>
  )
}

export default SignUpPage;