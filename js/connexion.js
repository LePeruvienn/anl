var isMenuOpen = false;

openMenu.onclick = open;

function open(){

	if (isMenuOpen){
		document.getElementById("sidemenu").style.left ="-300px";
		isMenuOpen = false;
	}
	else {
		document.getElementById("sidemenu").style.left ="0";
		isMenuOpen = true;
	}
}