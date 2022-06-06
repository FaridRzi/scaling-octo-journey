import React from 'react'
import Button from '../Components/Button'
import styles from '../styles/NewTask.module.css'
import { useState } from 'react'

function NewTask({ AddNewTask }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [cdate, setCDate] = useState('')

  const onNameChange = (event) => {
    if (event.target.value.trim().length > 0) {
      setName(event.target.value)
    }
  }

  const onDescriptionChange = (event) => {
    if (event.target.value.trim().length > 0) {
      setDescription(event.target.value)
    }
  }

  const createNewTask = (event) => {
    event.preventDefault()

    const newTask = {
      taskTitle: name,
      taskDescription: description,
      taskId: Math.round(Math.random() * 100),
      taskStatus: false,
      taskDue: cdate,
    }

    AddNewTask(newTask)

    setName('')
    setDescription('')
    setCDate('')
  }

  const te = (event) => {
    const newDate = (event.target.valueAsDate.toDateString());
    setCDate(newDate)
  }

  return (
    <div className={styles['form-container']}>
      <h1>Create A New Task</h1>
      <form onSubmit={createNewTask} className={styles.form}>
        <label htmlFor="name">Your Task Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter Your Task Name"
          value={name}
          onChange={onNameChange}
        />
        <label htmlFor="description">Explain it a bit</label>
        <input
          type="text"
          id="description"
          placeholder="Explain it a Bit"
          value={description}
          onChange={onDescriptionChange}
        />
        <label htmlFor="due-date">Due Date</label>
        <input type="date" id="due-date" onChange={te}/>
        <Button id="new-task" onClick={AddNewTask}>
          Create
        </Button>
      </form>
    </div>
  )
}
export default NewTask
