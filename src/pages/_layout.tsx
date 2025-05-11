import '../styles.css'

import type { ReactNode } from 'react'

import { Header } from '../components/header'
import { Footer } from '../components/footer'

type RootLayoutProps = { children: ReactNode }

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getData()

  return (
    <div className="font-['Nunito']">
      <meta name="description" content={data.description} />
      <link rel="icon" type="image/png" href={data.icon} />
      <Header />
      <main
        style={{ marginTop: 80 }}
        className="flex items-center justify-center *:min-h-64 *:min-w-64 lg:m-0 lg:min-h-svh lg:justify-center"
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}

const getData = async () => {
  const data = {
    description: 'O e-Commerce que mais cresce no Brasil',
    icon: '/images/favicon.png',
  }

  return data
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const
}
