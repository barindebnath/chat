'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { logOut } from '../services/user';
import { Notification } from '@mantine/core';
import { IconX } from '@tabler/icons-react';

const LogoutPage = () => {
  const { push } = useRouter();
  const [errorMsg, setErrorMsg] = useState('');

  const removeSession = async () => {
    const [data, error] = await logOut();
    if (error) setErrorMsg('Bummer! Something went wrong.');

    if (data) {
      if (data.message === 'error') {
        setErrorMsg(data.data.msg || 'Bummer! Something went wrong.');
      } else {
        // redirect to home page
        push('/');
      }
    }
  };

  useEffect(() => {
    removeSession();
    // eslint-disable-line react-hooks/exhaustive-deps
  }, []);

  return errorMsg ? (
    <Notification
      icon={<IconX size="1.1rem" />}
      color="red"
      onClose={() => setErrorMsg("")}
    >
      {errorMsg}
    </Notification>
  ) : null;
}

export default LogoutPage;