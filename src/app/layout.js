// src/app/layout.js
import './globals.css';
import Header from './components/Header';

export const metadata = {
  title: 'My Portfolio',
  description: 'Portfolio of Kavindu Shehan',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
        {/* Optional: Add <Footer /> component here */}
      </body>
    </html>
  );
}
