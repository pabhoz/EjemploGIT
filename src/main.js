let addNoteBtn = document.querySelector('#addNoteBtn');
addNoteBtn.onclick = () => {
    let newNoteInput = document.querySelector('#newNoteInput');
    let notes = document.querySelector('#app .notes');
    let note = document.createElement('li');

    let checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    checkBox.onclick = function() {
        let parent = this.parentElement;
        if (this.checked) {
            parent.classList.add('isDone');
        } else {
            parent.classList.remove('isDone');
        }
    };

    note.classList.add('note');
    note.innerHTML = `<div>${newNoteInput.value}</div>`;
    note.appendChild(checkBox);

    newNoteInput.value = '';

    notes.appendChild(note);
};
