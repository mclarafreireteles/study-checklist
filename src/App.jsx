import { useContext } from "react"
import { ChecklistsWrapper } from "./components/ChecklistsWrapper"
import { Container } from "./components/Container"
import { Dialog } from "./components/Dialog"
import { FabButton } from "./components/FabButton"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Heading } from "./components/Heading"
import { IconPlus, IconSchool } from "./components/icons"
import { ToDoGroup } from "./components/ToDoGroup"
import { ToDoForm } from "./components/ToDoForm"
import TodoContext from "./components/ToDoProvider/TodoContext."

function App() {
  const { todos, addToDo, showDialog, openFormTodoDialog, closeFormTodoDialog, selectedTodo, editTodo } = useContext(TodoContext);
  
  const handleFormSubmit = (formData) => {
    if (selectedTodo) {
      editTodo(formData)
    } else {
      addToDo(formData);
    }
    closeFormTodoDialog();
  }
  
  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>
        <Dialog />
        <ChecklistsWrapper>

          <ToDoGroup
            heading="Para estudar"
            items={todos.filter(t => !t.completed)}
          />

          <ToDoGroup
            heading="Concluído"
            items={todos.filter(t => t.completed)}
          />
          
          <Footer>
            <Dialog isOpen={showDialog} onClose={closeFormTodoDialog}>
              <ToDoForm onSubmit={handleFormSubmit} defaultValue={selectedTodo?.description}/>
            </Dialog>
            <FabButton onClick={() => openFormTodoDialog()}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  )
}

export default App
