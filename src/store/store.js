const dataJSONinitial = [
    {
        "word": "Apple",
        "transcription": "[æpl]",
        "translation": "яблоко",
        "id": "0",
    },

    {
        "word": "fruit",
        "transcription": "[fru:t]",
        "translation": "фрукт",
        "id": "1",
    },
  
   
];
const dataJSON = JSON.stringify(dataJSONinitial);
export const data = JSON.parse(dataJSON);
//console.log(data);

//export const data;