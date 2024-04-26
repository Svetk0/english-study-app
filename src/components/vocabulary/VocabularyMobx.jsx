import { useState, useEffect } from "react";
import styles from "./Vocabulary.module.css";
import { inject, observer } from "mobx-react";

//vocabulary mobx

function Vocabulary({ rowData, updateWord, deleteWord }) {
  const { id, english, transcription, russian } = rowData;

  const [errors, setErrors] = useState({
    english: false,
    transcription: false,
    russian: false,
  });
  const [errorDescription, setErrorDescription] = useState("");
  const [value, setValue] = useState({
    id: id,
    english: english,
    transcription: transcription,
    russian: russian,
  });

  const [isSelected, setIsSelected] = useState(false);
  const [btnSaveDisabled, setBtnSaveDisabled] = useState(false);
  const [inputValue, setInputValue] = useState({ ...value });

  function getValue(event) {
    setValue((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
    });

    setErrors({ ...errors, [event.target.name]: !event.target.value.trim() });
  }

  useEffect(() => {
    checkErrorsAreExist();
  }, [errors]);

  const checkErrorsAreExist = () => {
    if (errors.english || errors.transcription || errors.russian) {
      setBtnSaveDisabled(true);
      setErrorDescription("Field cannot be empty");
    } else {
      setBtnSaveDisabled(false);
    }
  };

  const handleEdit = () => {
    setIsSelected(!isSelected);
  };

  const handleSave = () => {
    updateWord(value);

    setIsSelected(!isSelected);
  };

  const handleCancel = () => {
    setValue({ ...inputValue });
    setIsSelected(!isSelected);
  };

  const handleDelete = async (id) => {
    deleteWord(id);
  };

  return isSelected ? (
    <tr className={styles.cardContainer}>
      <td>
        <input
          className={errors.english ? styles.errorInput : styles.tableInput}
          type="text"
          onChange={getValue}
          value={value.english}
          name="english"
        />
      </td>
      <td>
        <input
          className={
            errors.transcription ? styles.errorInput : styles.tableInput
          }
          type="text"
          onChange={getValue}
          value={value.transcription}
          name="transcription"
        />
      </td>
      <td>
        <input
          className={errors.russian ? styles.errorInput : styles.tableInput}
          type="text"
          onChange={getValue}
          value={value.russian}
          name="russian"
        />
      </td>
      <td className={styles.tdButtons}>
        <button
          className={styles.btnSave}
          onClick={() => handleSave(value.id)}
          disabled={btnSaveDisabled}
        >
          Save
        </button>
      </td>
      <td className={styles.tdButtons}>
        <button className={styles.btnCancel} onClick={handleCancel}>
          Cancel
        </button>
      </td>
    </tr>
  ) : (
    <tr className={styles.cardContainer}>
      <td className={styles.card_word}>{value.english}</td>
      <td className={styles.card_transcription}>{value.transcription}</td>
      <td className={styles.translation}>{value.russian}</td>
      <td className={styles.tdButtons}>
        <button className={styles.btnEdit} onClick={handleEdit}>
          Edit
        </button>
      </td>
      <td className={styles.tdButtons}>
        <button
          className={styles.btnDelete}
          onClick={() => handleDelete(value.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default inject(({ wordStore }) => {
  const { updateWord, deleteWord } = wordStore;

  return {
    updateWord,
    deleteWord,
  };
})(observer(Vocabulary));
