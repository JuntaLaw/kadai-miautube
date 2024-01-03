import type { Metadata } from 'next';
import { M_PLUS_1 } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/shared/Navigation/Navigation';
import CurrentUserProvider from '@/context/CurrentUserContext';
import getCurrentUser from '@/actions/getCurrentUser';
import CreateChannelModalProvider from '@/context/CreateChannelModalContext';
import CreateChannelModal from "@/components/shared/Modal/CreateChannelModal";
import { Toaster } from 'react-hot-toast';
import getCurrentChannel from '@/actions/getCurrentChannel';
import CurrentChannelProvider from '@/context/CurrentChannelContext';
import UploadVideoModalProvider from '@/context/UploadVideoModalContext';

const mplus1 = M_PLUS_1({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Miautube',
  description: 'Broadcast yourself',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  const currentChannel = await getCurrentChannel();

  return (
    <html lang="ja">
      <body className={mplus1.className}>
        <CreateChannelModalProvider>
          <Toaster toastOptions={{ position: "bottom-left" }} />
          <CreateChannelModal />
          <CurrentUserProvider user={currentUser}>
            <CurrentChannelProvider channel={currentChannel}>
              <UploadVideoModalProvider>
                <Navigation />
                <div className="pt-16">{children}</div>
              </UploadVideoModalProvider>
            </CurrentChannelProvider>
          </CurrentUserProvider>
        </CreateChannelModalProvider>
      </body>
    </html>
  );
}
