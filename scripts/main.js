const modalIntro = document.querySelector('#introModal');
const openIntroModal = document.querySelector('.introButton');
const closeIntroModal = document.querySelector('.close');

openIntroModal.addEventListener('click', (e) => {
  modalIntro.showModal();
})

closeIntroModal.addEventListener('click', (e) => {
  modalIntro.close();
})

const modalWork = document.querySelector('#workModal');
const openWorkModal = document.querySelector('.workButton');
const closeworkModal = document.querySelector('.closeSecond')

openWorkModal.addEventListener('click', (e) => {
  modalWork.showModal();
})

closeworkModal.addEventListener('click', (e) => {
  modalWork.close();
})

const modalAbout = document.querySelector('#aboutModal');
const openAboutModal = document.querySelector('.aboutButton');
const closeAboutModal = document.querySelector('.closeThird');

openAboutModal.addEventListener('click', (e) => {
  modalAbout.showModal();
})

closeAboutModal.addEventListener('click', (e) => {
  modalAbout.close();
})

const modalContact = document.querySelector('#contactModal');
const openContactModal = document.querySelector('.contactButton');
const closeContactModal = document.querySelector('.closeFourth');

openContactModal.addEventListener('click', (e) => {
  modalContact.showModal();
})

closeContactModal.addEventListener('click', (e) => {
  modalContact.close();
})