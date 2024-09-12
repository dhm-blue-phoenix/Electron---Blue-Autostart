const ID_BTN_OPEN_FILE_DIALOG = document.getElementById('openFileDialog');
const ID_INPUT_FILE_PATH = document.getElementById('dataPath');
const ID_INPUT_FILE_NAME = document.getElementById('fileName');
const ID_INPUT_FILE_DESCRIPTION = document.getElementById('fileDescription');
const ID_MAIN_CONTENT = document.getElementById('mainContent');
const ID_INSERT_TEXT = document.getElementById('insertText');

// EXPORT Variables - gehört noch überarbeitet
const openFileDialog = ID_BTN_OPEN_FILE_DIALOG;
const outputFilePath = ID_INPUT_FILE_PATH;
const filePath = ID_INPUT_FILE_PATH;
const fileName = ID_INPUT_FILE_NAME;
const fileDescription = ID_INPUT_FILE_DESCRIPTION;
const mainContent = ID_MAIN_CONTENT;
const insertText = ID_INSERT_TEXT;

export { 
    openFileDialog,
    outputFilePath,
    filePath,
    fileName,
    fileDescription,
    mainContent,
    insertText
};