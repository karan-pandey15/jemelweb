import './globals.css';
import { Inter } from 'next/font/google';
import Prvider from '@/Redux/Prvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./globals.css"
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'keeva.in',
  description: 'PratapGarh Online Furniture Shop',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Prvider>
          <ToastContainer />
          {children}
        </Prvider>
      </body>
    </html>
  );
}
