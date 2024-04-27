import React, { useContext } from "react";
import { WordContext } from "../../context/WordContext/WordContext";
import { API_ALL_WORDS } from "../../utils/constants";

const VocabularyList = () => {
  const { words, setWords } = useContext(WordContext);

  const handleDeleteTask = async (taskId) => {
    try {
     
      const response = await fetch(`${API_ALL_WORDS}/${taskId}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to delete task");
      }

      // Если задача успешно удалена на сервере, удаляем ее локально
        console.log('get: id: ',taskId);
      setWords(words.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };
    
  const handleEditTask = async (taskId) => {
    try {
      
      const response = await fetch(`${API_ALL_WORDS}/${taskId}/update`, {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to EDIT task");
      }

      // Если задача успешно удалена на сервере, удаляем ее локально
        console.log('update: : ',taskId, words[taskId].english);
      //setWords(words.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error("Error editing task:", error);
    }
  };

  return (
    <div className='todo-list'>
      {words.map((task) => (
        <div key={task.id} className='todo-item'>
          <input type='checkbox' checked={task.completed} readOnly />
          <span>{task.english}</span>
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
              <button onClick={() => handleEditTask(task.id)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default VocabularyList;