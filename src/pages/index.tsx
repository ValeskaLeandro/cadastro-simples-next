import Button from '@/components/Button'
import Layout from '@/components/Layout'
import Table from '@/components/Table'
import Client from '@/core/Client'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const clients = [
    new Client('Ana', 26, '1'),
    new Client('Bia', 31, '2'),
    new Client('João', 21, '3'),
    new Client('Marcos', 43, '4'),
    new Client('Pedro', 36, '5'),
  ]

  function clientSelected(client: Client) {
    console.log(client.name)
  }

  function clientExcluded(client: Client) {
    console.log(client.age)
}

  return (
    <div className={`
      flex h-screen items-center justify-center
      bg-gradient-to-r from-blue-500 to-purple-500 text-white
      `}>
      <Layout title='Cadastro Simples!'>
        <div className='flex justify-end'>
          <Button className='mb-4'>Novo Cliente</Button>
        </div>
        <Table clients={clients} clientSelected={clientSelected}
        clientExcluded={clientExcluded}/>
      </Layout>
    </div>
  )
}
