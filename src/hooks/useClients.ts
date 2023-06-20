/* eslint-disable react-hooks/exhaustive-deps */
import Client from "@/core/Client"
import ClientRepository from "@/core/ClientRepository"
import ClientCollection from "@/firebase/db/ClientCollection"
import { useEffect, useState } from "react"
import useTableOrForm from "./useTableOrForm"

export default function useClients() {
  const {displayForm, displayTable, visibleTable} = useTableOrForm()
  const repo: ClientRepository = new ClientCollection()
  const [clients, setClients] = useState<Client[]>([])  
  const [client, setClient] = useState<Client>(Client.void)
  
  useEffect(getAll, [])

  function getAll(){
    repo.getAll().then(clients => {
      setClients(clients)
      displayTable()
    })
  }

  function selectClient(client: Client) {
    setClient(client)
    displayForm()
  }

  async function deleteClient(client: Client) {
    await repo.delet(client)
    getAll()
  }

  async function saveClient(client: Client) {
    await repo.save(client)
    getAll()
  }

  function newClient() {
    setClient(Client.void)
    displayForm()
  }

  return{
    client,
    clients,
    newClient,
    saveClient,
    deleteClient,
    selectClient,
    getAll,
    visibleTable,
    displayTable
  }
}