import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Spray Foam Insurance | Call 844-967-5247',
  description: 'Specialized insurance solutions for spray foam contractors. General liability, workers comp, commercial auto, environmental liability, and more.',
  metadataBase: new URL('https://sprayfoaminsurance.com'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
