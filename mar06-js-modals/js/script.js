var modal = document.createElement('modal');
 modalForm = document.createElement('form');
 modalInput = document.createElement('input');
 modalConfirm = document.createElement('input');
 modalCancel = document.createElement('input');





function createModal(modalType modalMsg){
var modalForm = document.createElement('form'),
    modalMessage = document.createElement('p')
    modalInput = document.createElement('input'),
    modalConfirm = document.createElement('input'),
    modalCancel = document.createElement('input');

  modalInput.type = 'text';
  modalInput.placeholder = 'Your Response';

  modalConfirm.type = 'submit';
  modalConfirm.value = 'Confirm';

  modalCancel.type = 'button';
  modalCancel.value = 'cancel';

  modalForm.append(modalInput);
  modalForm.append(modalCancel);
  modalForm.append(modalConfirm);

  modal.append(modalMessage);
  if(modalType === 'prompt'){
     modal.append(modalInput);
     modal.append(modalCancel);
  }else if(modalType === 'confirm'){
    modalForm.append(modalCancel);
  }
     modalForm.append(modalConfirm);
     modalDiv.append(modalDiv);

modal.append(modalForm);

modalCancel.addEventListener('click', function(){
  console.log('user clicked confirm');
  modal.removeChild(modalForm)
  modal.classList.remove('active');
});
modalConfirm.addEventListener('click', function(e t){
  evt.preventDefault();
  var userInput = modalInput.value;
  console.log(userInput);
});
}

createModal('prompt');
