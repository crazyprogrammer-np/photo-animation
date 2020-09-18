//declearing html elements
const input = document.querySelector('#input');
const img = document.querySelector('#img');
const mainBtn = document.querySelector('#btnMain');

let animationType = document.querySelector('#animationType');


img.style.display = "none";

input.addEventListener('change', function () {

  const uploadFile = input.files[0];

  if (uploadFile) {
    const reader = new FileReader();

    reader.addEventListener('load', function () {
      mainBtn.remove();
      img.style.display = "block";
      img.setAttribute('src', reader.result);
      img.classList.add('anime1');
      animationType.style.display = "block";
      animationType.addEventListener('change', function () {
        if (this.value == 'opt1') {

          img.classList.replace("anime2", "anime1");
          img.classList.replace("anime3", "anime1");
          img.classList.replace("anime4", "anime1");
          img.classList.replace("anime5", "anime1");

        } else if (this.value == 'opt2') {

          img.classList.replace("anime1", "anime2");
          img.classList.replace("anime3", "anime2");
          img.classList.replace("anime4", "anime2");
          img.classList.replace("anime5", "anime2");

        } else if (this.value == 'opt3') {

          img.classList.replace("anime1", "anime3");
          img.classList.replace("anime2", "anime3");
          img.classList.replace("anime4", "anime3");
          img.classList.replace("anime5", "anime3");

        } else if (this.value == 'opt4') {

          img.classList.replace("anime1", "anime4");
          img.classList.replace("anime2", "anime4");
          img.classList.replace("anime3", "anime4");
          img.classList.replace("anime5", "anime4");

        } else if (this.value == 'opt5') {
          img.classList.replace("anime1", "anime5");
          img.classList.replace("anime2", "anime5");
          img.classList.replace("anime3", "anime5");
          img.classList.replace("anime4", "anime5");
        }
      })


    });

    reader.readAsDataURL(uploadFile);

  }

});