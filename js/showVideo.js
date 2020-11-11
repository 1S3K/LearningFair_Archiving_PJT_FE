// const showVideoBtn = document.querySelector('#showVideoBtn');
// const video = document.querySelector('#video');

// showVideoBtn.addEventListener('click', () => {
//   if (video.style.display == 'none') {
//     video.style.display = 'block';
//   } else {
//     video.style.display = 'none';
//   }
// });

$('.showVideoBtn').click(function() {
  console.log('clicked');
  console.log($(this).parent().parent().next());
  $(this).parent().parent().next().toggle('.video');
});