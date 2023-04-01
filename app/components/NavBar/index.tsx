import React, { ReactNode, memo, useCallback, useState } from 'react';

// mantine
import {
  List,
  Text,
  Divider,
  useMantineTheme,
} from "@mantine/core";

// local
import UserBlock from './UserBlock';

type NavBarProps = {
  isMobile: boolean;
  header: ReactNode;
};

function NavBar(props: NavBarProps) {
  const theme = useMantineTheme();

  const [selectedUser, setSelectedUser] = useState<number | null>(null);

  const handleUserClick = useCallback((id: number) => {
    setSelectedUser(id);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: '100%',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[9] : theme.colors.gray[2],
        padding: theme.spacing.md,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {!props.isMobile ? props.header : (<div style={{ height: '53px' }} />)}
      <Divider />
      <div style={{ flexGrow: 1 }}>
        <List>
          {tempUsersData.map((user) => (
            <UserListItems
              key={user.id}
              handleUserClick={handleUserClick}
              isSelected={selectedUser === user.id}
              {...user}
            />
          ))}
        </List>
      </div>
      <Divider />
      <UserBlock />
    </div>
  );
}

export default memo(NavBar);

type UserListItemProps = {
  id: number;
  firstName: string;
  isSelected: boolean;
  handleUserClick: (id: number) => void;
};

const UserListItems = memo((props: UserListItemProps) => {
  const theme = useMantineTheme();

  return (
    <div
      onClick={() => props.handleUserClick(props.id)}
      style={{
        backgroundColor: props.isSelected ? theme.colors.gray[2] : 'transparent',
      }}
    >
      <Text weight={500}>{props.firstName}</Text>
    </div>
  )
});


const tempUsersData = [{
  id: 1,
  firstName: 'Kyle',
}, {
  id: 2,
  firstName: 'Alen',
}, {
  id: 3,
  firstName: 'Rowan',
}, {
  id: 4,
  firstName: 'Brit',
}, {
  id: 5,
  firstName: 'Carson',
}, {
  id: 6,
  firstName: 'Mike',
}]