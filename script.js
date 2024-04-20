// 獲取檔案的建立日期函數
function getFileCreationDate(fileUrl, id) {
    fetch(fileUrl)
      .then(response => {
        const lastModifiedHeader = response.headers.get('last-modified');
        const date = new Date(lastModifiedHeader);
        const dateString = date.toLocaleDateString();
        document.getElementById(id).innerText = dateString;
      })
      .catch(error => {
        console.error('Error fetching file:', error);
      });
  }
  
  // 調用函數獲取 Diary.html 的建立日期
  document.getFileCreationDate('Diary/Diary.html', 'diary-update-date');
  
  // 調用函數獲取 Animation.html 的建立日期
  document.getFileCreationDate('Animation/Animation.html', 'animation-update-date');
  
  // 調用函數獲取 Manga.html 的建立日期
  document.getFileCreationDate('Manga/Manga.html', 'manga-update-date');
  
  // 調用函數獲取 Engineering.html 的建立日期
  document.getFileCreationDate('Engineering/Engineering.html', 'engineering-update-date');
  