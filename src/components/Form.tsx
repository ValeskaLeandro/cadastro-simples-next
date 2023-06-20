import { useState } from "react";
import Input from "./Input";
import Client from "@/core/Client";
import Button from "./Button";

interface FormProps {
  client: Client
  canceled?: () => void
  onChange?: (client: Client) => void
}

export default function Form(props: FormProps) {
  const id = props.client?.id
  const [name, setName] = useState(props.client?.name ?? '')
  const [age, setAge] = useState(props.client?.age ?? 0)

  return(
    <div>
      {id ? (
        <Input text="Código" value={id} readOnly className="mb-4" />
      ): false}
      <Input text="Nome" value={name} onChange={setName} className="mb-4"/>
      <Input text="Idade" value={age} type="number" onChange={setAge}/>
      <div className=" flex justify-end mt-7">
        <Button color="blue" className="mr-2" 
        onClick={() => props.onChange?.(new Client(name, +age, id))}>
          {id? 'Alterar' : 'Salvar'}
        </Button>
        <Button color="gray" onClick={props.canceled}>Cancelar</Button>

      </div>
    </div>
  )
}