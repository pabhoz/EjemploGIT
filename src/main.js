let addNoteBtn = document.querySelector('#addNoteBtn');
addNoteBtn.onclick = () => {
    let newNoteInput = document.querySelector('#newNoteInput');
    let notes = document.querySelector('#app .notes');
    let note = document.createElement('li');
    let checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    note.classList.add('note');
    note.innerHTML = newNoteInput.value;
    note.appendChild(checkBox);
    newNoteInput.value = '';
    notes.appendChild(note);
};
