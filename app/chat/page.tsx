'use client'
import { useCallback } from 'react';

// local
import ChatBubble from "./ChatBubble";
import InputBox from "./InputBox";
import RightContent from "./RightContent";
import useWebSocket from '../services/useWebSocket';

const ChatPage = () => {
  const { socket, messages, send } = useWebSocket();

  // const rightPanel = props.right && (
  //   <div
  //     style={{
  //       position: "fixed",
  //       top: 0,
  //       right: 0,
  //       bottom: 0,
  //       width: isMobile ? "100%" : 240,
  //       padding: theme.spacing.lg,
  //     }}
  //   >
  //     {props.right}
  //   </div>
  // );

  const handleSend = useCallback((message: string) => send(message), []);

  return socket ? (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

      <div
        style={{
          padding: '24px',
          flexGrow: 1,
        }}
      >
        <ChatBubble message="Hello, how can I help you?" />
        <ChatBubble message="I need help with my account." isSelf />
        <ChatBubble message="Sure, what do you need help with?" />
        <ChatBubble message="I can't log in." isSelf />
        <ChatBubble message="Okay, let me see what I can do." />
        {messages.length ? messages.map((message, index) => (
          <ChatBubble
            key={message + index}
            message={message}
          />
        )) : null}
      </div>
      <InputBox handleSend={handleSend} />
    </div>
  ) : 'Loading...';
}

export default ChatPage;