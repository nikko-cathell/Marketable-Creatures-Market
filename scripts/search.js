// Search
function search() {
  var input, filter, ul, li, div, div, h6, txtValue;
  input = document.getElementById('find');
  filter = input.value.toUpperCase();
  ul = document.getElementById("shopables");
  li = ul.getElementsByClassName('item-holder');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("h6")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}