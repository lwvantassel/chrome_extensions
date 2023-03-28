
document.addEventListener("wheel", removePromoted);
function removePromoted(){
	var xpath = "//span[text()='Promoted']";
	var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
	if(matchingElement){
		matchingElement.closest('div[data-testid]').remove();
		console.log('something was removed');

	}
}