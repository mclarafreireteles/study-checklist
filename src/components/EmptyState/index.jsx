import './emptystate.style.css'

export function EmptyState(){
    return (
        <div className='empty-container'> 
            <h3 className='empty-text'>Ainda não tem tarefas cadastradas, adicione para começar!</h3>
            <img src="../../../public/empty.png" alt="Empty state" className='empty-img' />
        </div>
    )
}