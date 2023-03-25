'use client'

import { Box } from "@mantine/core";

// local
import AppLayout from "./components/AppLayout";
import ChatBubble from "./components/ChatBubble";
import InputBox from "./components/InputBox";
import RightContent from "./components/RightContent";

const HomePage = () => {
  return (
    <AppLayout
      aside={<RightContent />}
      footer={<InputBox />}
    >
      <Box px='md'>
        <ChatBubble message="Hello, how can I help you?" />
        <ChatBubble message="I need help with my account." isSelf />
        <ChatBubble message="Sure, what do you need help with?" />
        <ChatBubble message="I can't log in." isSelf />
        <ChatBubble message="Okay, let me see what I can do." />
      </Box>
    </AppLayout>
  );
}

export default HomePage;