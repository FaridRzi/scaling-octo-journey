import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NewTask from './NewTask'
import TaskList from './TaskList'
import React, { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const DUMMY_DATA = [
    {
      taskTitle: 'Go Fuck Yourself',
      taskDescription: 'It could be fun to be independent LOL',
      taskId: 'fuck1',
      taskDue: '2022-06-09',
      taskStatus: false,
    },
    {
      taskTitle: 'Go Fuck Myself',
      taskDescription: 'It could be fun to be independent as fuck LOL',
      taskId: 'fuck2',
      taskDue: '2022-06-19',
      taskStatus: true,
    },
    {
      taskTitle: 'Go Fuck Herself',
      taskDescription: 'It could be fun to be independent as duck LOL',
      taskId: 'fuck3',
      taskDue: '2022-10-09',
      taskStatus: false,
    },
    {
      taskTitle: 'Go Fuck Himself',
      taskDescription: 'It could be fun to be independent as cock LOL',
      taskId: 'fuck4',
      taskDue: '2024-06-09',
      taskStatus: true,
    },
  ]

  const [currentTasks, setCurrentTasks] = useState(DUMMY_DATA)

  const AddNewTask = (NewTask) => {
    addToServer(NewTask)
    setCurrentTasks((prevState) => [NewTask, ...prevState])
  }

  async function addToServer(newTask) {
    const response = await fetch('/api/OpenTasks', {
      
      method: 'POST',
      body: JSON.stringify({_id:Math.random(),...newTask}),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    console.log(response.json)
  }

  return (
    <>
      <Head>
        <title>Open shit</title>
      </Head>
      <Link href="/NewTask">
        <NewTask taskList={DUMMY_DATA} AddNewTask={AddNewTask} />
      </Link>
      <Link href="/">
        <a>
          <TaskList taskList={currentTasks} />
        </a>
      </Link>
    </>
  )
}
