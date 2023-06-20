import Layout from '@/components/Layout'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`
      flex h-screen items-center justify-center
      bg-gradient-to-r from-blue-500 to-purple-500 text-white
      `}>
      <Layout title='Cadastro Simples!'>
        <span>Qualquer coisa</span>
      </Layout>
    </div>
  )
}
