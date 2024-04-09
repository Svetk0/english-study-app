const dataJSONinitial = [
    {
        "word": "Apple",
        "transcription": "[æpl]",
        "translation": "яблоко",
        "id": "1",
    },

    {
        "word": "fruit",
        "transcription": "[fru:t]",
        "translation": "фрукт",
        "id": "2",
    },

    {
        "word": "We",
        "transcription": "[vi]",
        "translation": "Мы",
        "id": "3",
       
    },
    {
        "word": "I",
        "transcription": "[]",
        "translation": "Я",
        "id": "4",
       
    },
    {
        "word": "Congratulations",
        "transcription": "[kənɡraʧəˈleɪʃnz]",
        "translation": "Поздравления",
        "id": "5",
       
    },
  
   
];
const dataJSON = JSON.stringify(dataJSONinitial);
export const data = JSON.parse(dataJSON);
//console.log(data);

//export const data;