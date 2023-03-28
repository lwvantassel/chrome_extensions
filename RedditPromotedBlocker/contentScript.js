if (document.readyState === "complete" || document.readyState === "interactive") {
        removePromoted();
    } 

document.addEventListener("DOMContentLoaded", removePromoted);
document.addEventListener("wheel", removePromoted);
function removePromoted(){
	let promoted = document.getElementsByClassName("promotedlink");
	for(let i = 0; i < promoted.length; i++){
		console.log('something was removed');
		promoted[i].remove();
	}
}