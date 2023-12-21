
import type { Metadata } from 'next'
import { M_PLUS_1 } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/shared/Navigation/Navigation';
import CurrentUserProvider from '@/context/CurrentUserContext';
import getCurrentUser from '@/actions/getCurrentUser';
import CreateChannelModalProvider from '@/context/CreateChannelModalContext';
import CreateChannelModal from "@/components/shared/Modal/CreateChannelModal"

const mplus1 = M_PLUS_1({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Miautube',
  description: 'Broadcast yourself',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const currentUser = await getCurrentUser();

  return (
    <html lang="ja">
      <body className={mplus1.className}>
        <CreateChannelModalProvider>
          <CreateChannelModal />
          <CurrentUserProvider user={currentUser}>
            <Navigation />
            <div className="pt-16">{children}</div>
          </CurrentUserProvider>
        </CreateChannelModalProvider>
      </body>
    </html>
  )
}
