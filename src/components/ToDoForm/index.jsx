import './todo-form.style.css'

export function ToDoForm({ children, onSubmit }){
    return (
        <form action={onSubmit} className='form'>{children}</form>
    )
}