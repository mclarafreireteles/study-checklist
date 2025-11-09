import { useState, useContext } from "react"
import { ChecklistsWrapper } from "./components/ChecklistsWrapper"
import { Container } from "./components/Container"
import { Dialog } from "./components/Dialog"
import { FabButton } from "./components/FabButton"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Heading } from "./components/Heading"
import { IconPlus, IconSchool } from "./components/icons"
import { ToDoGroup } from "./components/ToDoGroup"
import { TextInput } from "./components/TextInput"
import { Button } from "./components/Button"
import { ToDoForm } from "./components/ToDoForm"
import TodoContext from "./components/ToDoProvider/TodoContext."

function App() {
  const [showDialog, setShowDialog] = useState(false);
  const { todos, addToDo } = useContext(TodoContext);
  
  const toggleDialog = () => {
    setShowDialog(prevState => !prevState);
  }

  const handleFormSubmit = (formData) => {
    addToDo(formData);
    console.log(todos)
    toggleDialog();
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
            <Dialog isOpen={showDialog} onClose={toggleDialog}>
              <ToDoForm onSubmit={handleFormSubmit}>
                <TextInput placeholder="Digite o item que deseja adicionar" name="description" required />
                <Button>Salvar item</Button>
              </ToDoForm>
            </Dialog>
            <FabButton onClick={toggleDialog}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  )
}

export default App
