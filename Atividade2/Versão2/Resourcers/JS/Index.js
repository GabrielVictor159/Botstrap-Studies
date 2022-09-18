var btn = document.getElementById('btn')
btn.addEventListener('click', clickSearch)
var i= 1;
function clickSearch(){
  var btnSearch = document.getElementById('inputSearch')
  var btnOk = document.getElementById('ButtonSearch')
  i++;
  divisao = i%2;
  if(divisao==0){
    btnOk.style.display = 'block';
    btnSearch.style.display = 'block';
  }
  else{
    btnOk.style.display = 'none';
    btnSearch.style.display = 'none';
  }
}
var footer = document.getElementsByClassName('footer')

footer.style.backgroundColor = 'rgb(255, 255, 255);'