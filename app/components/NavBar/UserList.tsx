import React, { memo, useCallback, useState } from 'react';

// mantine
import {
  List,
  Text,
  useMantineTheme,
} from '@mantine/core';

const UserList = () => {

  const [selectedUser, setSelectedUser] = useState<number | null>(null);

  const handleUserClick = useCallback((id: number) => {
    setSelectedUser(id);
  }, []);

  return (
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
  )
}

export default memo(UserList);


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
UserListItems.displayName = 'UserListItems';

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