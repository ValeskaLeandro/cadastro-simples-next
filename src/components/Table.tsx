import Client from "@/core/Client"
import { EditIcon, TrashIcon } from "./Icons"

interface TableProps{
  clients: Client[]
  clientSelected?: (client: Client) => void
  clientExcluded?: (client: Client) => void
}
export default function Table(props: TableProps){
  const displayActions = props.clientSelected || props.clientExcluded

  function renderHeader() {
    return(
      <tr>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Idade</th>
        {displayActions ? <th className="p-4">Ações</th> : false}
        
      </tr>
    )
  }

  function renderActions(client: Client) {
    return (
      <td className="flex justify-center">
        {props.clientSelected ? (
          <button onClick={() => props.clientSelected?.(client)} className={`flex justify-center items-center
            text-green-600 hover:text-green-800 m-1 p-2` }>
            {EditIcon}
          </button>
        ) : false}
        {props.clientExcluded ? (
          <button onClick={() => props.clientExcluded?.(client)} className={`flex justify-center items-center
            text-red-500 hover:text-red-800 m-1 p-2` }>
            {TrashIcon}
          </button>
        ) : false}
        
      </td>
    )
  }

  function renderData() {
    return props.clients?.map((client, i) => {
      return(
        <tr key={client.id} className={`${i % 2=== 0? 'bg-purple-200': 
          'bg-purple-100'}`}>
          <td className=" text-left p-4">{client.id}</td>
          <td className=" text-left p-4">{client.name}</td>
          <td className=" text-left p-4">{client.age}</td>
          {displayActions ? renderActions(client) : false}
        </tr>
      )
    })
  }
  return(
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`bg-gradient-to-r from-purple-500 to-purple-800
        text-gray-100`}>
        {renderHeader()}
        </thead>
      <tbody>
        {renderData()}
        </tbody>
    </table>
  )
}