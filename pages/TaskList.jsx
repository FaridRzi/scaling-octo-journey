import styles from '../styles/TaskList.module.css'

export default function TaskList({ taskList }) {
  return (
    <div className={styles['task-list-container']}>
      <ul className={styles['task-list']}>
        {taskList.map((task) => {
          return (
            <li
              key={task.taskId}
              style={{
                textDecoration:
                  task.taskStatus === true ? 'line-through' : `inherit`,
              }}
            >
              <h1>{task.taskTitle}</h1>
              <p>{task.taskDescription}</p>
              <h2>{task.taskDue}</h2>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
