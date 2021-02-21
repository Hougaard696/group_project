function passadmin(admin) {
if (admin.id.value=="Admin") { 
if (admin.pass.value=="WeRock") {              
location="admin_edit_remove_picture.html" 
} else {
alert("Wrong Password")
}
} else {  alert("Wrong UserID")
}
}