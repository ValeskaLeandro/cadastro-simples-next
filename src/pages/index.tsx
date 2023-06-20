import Button from '@/components/Button'
import Form from '@/components/Form'
import Layout from '@/components/Layout'
import Table from '@/components/Table'
import Client from '@/core/Client'
import { useState } from 'react'

export default function Home() {
  const [visible, setVisible] = useState<'table' | 'form'>('table')
  const [client, setClient] = useState<Client>(Client.void)
  const clients = [
    new Client('Ana', 26, '1'),
    new Client('Bia', 31, '2'),
    new Client('João', 21, '3'),
    new Client('Marcos', 43, '4'),
    new Client('Pedro', 36, '5'),
  ]

  function clientSelected(client: Client) {
    setClient(client)
    setVisible('form')
  }

  function clientExcluded(client: Client) {
    console.log(client.age)
  }

  function saveClient(client: Client) {
    console.log(client)
    setVisible('table')
  }

  function newClient() {
    setClient(Client.void)
    setVisible('form')
  }

  return (
    <div className={`
      flex h-screen items-center justify-center
      bg-gradient-to-r from-blue-500 to-purple-500 text-white
      `}>
      <Layout title='Cadastro Simples!'>
        {visible === 'table' ? (
          <>
        <div className='flex justify-end'>
          <Button className='mb-4' onClick={newClient}>Novo Cliente</Button>
        </div>
        <Table clients={clients} clientSelected={clientSelected}
        clientExcluded={clientExcluded}/>
        </>
        ) : (
          <Form client={client} 
          onChange={saveClient}
          canceled={() => setVisible('table')}/>
        )}
      </Layout>
    </div>
  )
}
