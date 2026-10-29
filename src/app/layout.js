import { CounterProvider } from '@/context/CounterContext';
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>
        <CounterProvider>
          {children}
        </CounterProvider>
      </body>
    </html>
  );
}