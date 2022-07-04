let knopka = document.getElementById('click');


knopka.onclick = function(){
    let theme = document.getElementById('theme');

    if(theme.getAttribute('href') == './oq.css'){
        theme.href = 'qora.css'
    }
  else{
      theme.href = 'oq.css';
  }
}
