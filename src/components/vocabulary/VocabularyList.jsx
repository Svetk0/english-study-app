import React, { useContext } from "react";
import { WordContext } from "../../context/WordContext/WordContext";

const VocabularyList = () => {
  const { words, setWords } = useContext(WordContext);

  const handleDeleteTask = async (taskId) => {
    try {
      // Отправка DELETE-запроса для удаления задачи на сервере
      const response = await fetch(`https://your-api-url/tasks/${taskId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete task");
      }

      // Если задача успешно удалена на сервере, удаляем ее локально
      setWords(words.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className='todo-list'>
      {words.map((task) => (
        <div key={task.id} className='todo-item'>
          <input type='checkbox' checked={task.completed} readOnly />
          <span>{task.title}</span>
          <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default VocabularyList;