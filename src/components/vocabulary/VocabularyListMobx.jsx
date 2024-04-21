
import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";

const VocabularyList = ({ words}) => { 
//mobx test
return (
    <div className='todo-list'>
      {words.map((task) => (
        <div key={task.id} className='todo-item'>
          <input type='checkbox' checked={task.completed} readOnly />
          <span>{task.english}</span>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
}



export default inject(({ wordStore }) => {
    const { words, loadData } = wordStore;
  
    useEffect(() => {
      loadData();
    }, []);
  
    return {
      words,
      loadData,
    };
  })(observer(VocabularyList));



