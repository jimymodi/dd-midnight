let changeToMidnight = document.getElementById('changeToMidnight');

changeToMidnight.onclick = function(element) {
	
	let color = element.target.value;
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript(tabs[0].id, {
				file: 'contentScript.js'
			}
		);
	});
};