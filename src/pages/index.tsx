import Button from '@/components/Button'
import Form from '@/components/Form'
import Layout from '@/components/Layout'
import Table from '@/components/Table'
import useClients from '@/hooks/useClients'

export default function Home() { 
  const {client, clients, newClient, selectClient, 
    deleteClient, saveClient, visibleTable, displayTable} = useClients() 
  return (
    <div className={`
      flex h-screen items-center justify-center
      bg-gradient-to-r from-blue-500 to-purple-500 text-white
      `}>
      <Layout title='Cadastro Simples!'>
        {visibleTable? (
          <>
        <div className='flex justify-end'>
          <Button className='mb-4' onClick={newClient}>Novo Cliente</Button>
        </div>
        <Table clients={clients} clientSelected={selectClient}
        clientExcluded={deleteClient}/>
        </>
        ) : (
          <Form client={client} 
          onChange={saveClient}
          canceled={() => displayTable}/>
        )}
      </Layout>
    </div>
  )
}
