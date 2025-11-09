import './todo-form.style.css'
import { TextInput } from '../TextInput'
import { Button } from '../Button'

export function ToDoForm({ onSubmit, defaultValue }){
    return (
        <form action={onSubmit} className='form'>
            <TextInput placeholder="Digite o item que deseja adicionar" name="description" required defaultValue={defaultValue} />
            <Button>Salvar item</Button>
        </form>
    )
}