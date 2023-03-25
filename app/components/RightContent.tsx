import React, { memo } from 'react';

// mantine
import {
  Aside,
  MediaQuery,
  Text,
} from '@mantine/core';

const RightContent = () => {
  return (
    <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
      <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
        <Text>Right content</Text>
      </Aside>
    </MediaQuery>
  )
}

export default memo(RightContent);