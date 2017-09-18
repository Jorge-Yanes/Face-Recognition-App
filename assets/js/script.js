 function log_In() {
     if ((document.getElementById("user").value == "admin") &&
         (document.getElementById("pass").value == "admin")) {

         //esto hay que acbarlo
         location.href = "blank.html";

     } else {
         document.getElementById("error").innerHTML = "Usuario o contrasena incorrectos.";

     }
 }

 function infoTable() { //a lo mejor hay que poner response en vez de data 
     const subject_name = response.images["0"].transaction.gallery_name;
     //  const table = document.getElementById('infoTables');
     console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
     console.log(subject_name);



 }





 //This function manages the camera, takes the photos, 
 (function () {

     var streaming = false,
         video = document.querySelector('#video'),
         canvas = document.querySelector('#canvas'),
         photo = document.querySelector('#photo'),
         startbutton = document.querySelector('#startbutton'),
         width = 480,
         height = 0;

     navigator.getMedia = (navigator.getUserMedia ||
         navigator.webkitGetUserMedia ||
         navigator.mozGetUserMedia ||
         navigator.msGetUserMedia);

     navigator.getMedia({
             video: true,
             audio: false
         },
         function (stream) {
             if (navigator.mozGetUserMedia) {
                 video.mozSrcObject = stream;
             } else {
                 var vendorURL = window.URL || window.webkitURL;
                 video.src = vendorURL.createObjectURL(stream);
             }
             video.play();
         },
         function (err) {
             console.log("An error occured! " + err);
         }
     );

     video.addEventListener('canplay', function (ev) {
         if (!streaming) {
             height = video.videoHeight / (video.videoWidth / width);
             video.setAttribute('width', width);
             video.setAttribute('height', height);
             canvas.setAttribute('width', width);
             canvas.setAttribute('height', height);
             streaming = true;
         }
     }, false);

     function takepicture() {
         canvas.width = width;
         canvas.height = height;
         canvas.getContext('2d').drawImage(video, 0, 0, width, height);
         var data = canvas.toDataURL('image/png');
         photo.setAttribute('src', data);
         subirFoto();
         // infoTable();
         // console.log(data);
     }


     startbutton.addEventListener('click', function (ev) {
         takepicture();
         ev.preventDefault();
     }, false);



 })();









 //Enrolling a photo with a determinated id to a determinated gallery

 function subirFoto() {
     var request = new XMLHttpRequest();

     request.open('POST', 'https://api.kairos.com/enroll');

     request.setRequestHeader('Content-Type', 'application/json');
     request.setRequestHeader('app_id', 'c91f845b');
     request.setRequestHeader('app_key', 'c000a704430af1656e1848ea61964077');

     request.onreadystatechange = function () {
         if (this.readyState === 4) {
             console.log('Status:', this.status);
             console.log('Headers:', this.getAllResponseHeaders());
             console.log('Body:', this.responseText);
         }
     };

     var foto = document.getElementById("photo").getAttribute("src");

     var body = {
         'image': foto,
         'subject_id': 'Elefante prueba',
         'gallery_name': 'MyGalleryPrueba'
     };

     request.send(JSON.stringify(body));
 }

 function othername() {
     var input = document.getElementById("userInput").value;
     alert(input);
     console.log(input);
 }
