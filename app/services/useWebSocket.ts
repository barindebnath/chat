import { useEffect, useRef, useState } from 'react';
import { w3cwebsocket } from 'websocket';

// local
import config from "../utils/config";

const useWebSocket = () => {
  const [socket, setSocket] = useState<w3cwebsocket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const socketRef = useRef<w3cwebsocket | null>(null);

  useEffect(() => {
    // Create a WebSocket client
    const client = new w3cwebsocket(config.apiWsUrl || '');

    // WebSocket open event listener
    client.onopen = () => {
      console.log('client.onopen >> ')
      setSocket(client);
    };

    // WebSocket message event listener
    client.onmessage = (event) => {
      console.log('client.onmessage >> ', event)
      if (typeof event.data === 'string') {
        const newMessage: string = event.data;
        // Handle string message
        console.log(`Received string message: ${newMessage}`);
        setMessages((old) => [...old, newMessage]);
      } else if (event.data instanceof ArrayBuffer) {
        // Handle binary message
        const byteArray = new Uint8Array(event.data);
        console.log(`Received binary message: ${Array.from(byteArray, (byte) => byte.toString(16)).join(' ')}`);
      } else {
        console.log('message: ', event.data)
        console.log('type: ', typeof event.data, event.data instanceof Buffer)
      }
    };

    // WebSocket close event listener
    client.onclose = (event) => {
      console.log(`WebSocket client disconnected: ${event.code} - ${event.reason}`);
    };

    // Save the WebSocket client instance to the ref
    socketRef.current = client;

    // Clean up the WebSocket client when the component unmounts
    return () => {
      client.close();
    };
  }, []);

  const send = (message: string) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(message);
    }
  };

  return { socket, messages, send };
};

export default useWebSocket;