import { ipcRenderer } from 'electron';
import { writeFileSync } from 'fs';
const ipc = ipcRenderer;

document.getElementById("contentFile")
    .addEventListener("keydown", function(event) {
        if (event.ctrlKey && (event.key === "s" || event.key === "S")) {
            event.preventDefault();
            createFile();
        }
});

async function createFile(){
    let nameFile = document.getElementById('nameFile').value;
    let contentFile = document.getElementById('contentFile').value;
    if(nameFile.toString().length === 0)
    {
        var todayDate = new Date().toISOString().slice(0, 10);
        nameFile = `file${todayDate}.txt`;
    }
    else
        nameFile += '.txt';
    const dirFile = `C://NotesFiles//${nameFile}`;
    writeFileSync(dirFile, contentFile);
    ipc.send('save_and_close');
}