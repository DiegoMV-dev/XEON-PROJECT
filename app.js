const boxes = document.querySelectorAll('.box');
const infoDiv = document.querySelector('.info');

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    infoDiv.innerHTML = '';
    switch (box.id) {
      case 'box1':
        infoDiv.innerHTML = '';
        break;
      case 'box2':
        infoDiv.innerHTML = 'def';
        break;
      case 'box3':
        infoDiv.innerHTML = 'zxy';
        break;
    }
  });
});