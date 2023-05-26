document.addEventListener('DOMContentLoaded', function() {
    const inputChapter = document.getElementById('inputChapter');
    const addChapterBtn = document.getElementById('addChapterBtn');
    const chapterList = document.getElementById('chapterList');
  
    addChapterBtn.addEventListener('click', function() {
      const chapterName = inputChapter.value.trim();
  
      if (chapterName !== '') {
        const li = document.createElement('li');
        const deleteBtn = document.createElement('button');
  
        li.textContent = chapterName;
        deleteBtn.textContent = '❌';
        deleteBtn.classList.add('deleteBtn');
  
        li.appendChild(deleteBtn);
        chapterList.appendChild(li);
  
        deleteBtn.addEventListener('click', function() {
          li.remove();
        });
  
        inputChapter.focus();
        inputChapter.value = '';
      }
    });
  });
  