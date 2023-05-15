function login()
{
  Name = document.getElementById("input1").value;

  localStorage.setItem("user_name", Name);
  window.location = "kwitter_room.html";
 
}