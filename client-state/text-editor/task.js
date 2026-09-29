const textAreaVolume = document.getElementById('editor');
const textAreaClear= document.getElementById('clear');

const savedText = localStorage.getItem('textAreaVolume');
if (savedText) {
  textAreaVolume.value = savedText;
}

textAreaVolume.addEventListener('input', () => {
  localStorage.setItem('textAreaVolume', textAreaVolume.value);
});

textAreaClear.addEventListener('click', () => {
  localStorage.removeItem('textAreaVolume');
  textAreaVolume.value = '';
});