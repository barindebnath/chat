import RootStyleRegistry from "./emotion";

export const metadata = {
  title: 'Chat App',
  description: 'A chat app built with Next.js and Golang',
  keywords: 'chat, app, Next.js, Golang, Mantine UI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" style={{ height: '100%' }}>
      <head />
      <body style={{ height: '100%' }}>
        <RootStyleRegistry>
          {children}
        </RootStyleRegistry>
      </body>
    </html>
  )
}
