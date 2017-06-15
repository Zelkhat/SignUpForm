var incorrectTags = [];

function validateForm() {
	
	var textInputs = document.querySelectorAll('input[type=text], input[type=password]');
	/*var emailInput = document.querySelector('input[name=email]');*/
	var genderInputs = document.querySelectorAll('.gender input[type=radio]');
	/*var passInputs = document.querySelectorAll('input[type=password]');*/
	incorrectTags.length = 0;

	// check all text inputs, they should not be empty
	textInputIsEmpty(textInputs);
	// check input radio, there should be something .checked
	genderIsEmpty(genderInputs);
	
	paintInRed();
	return false;
	alert('Everything is OK! You got it!');
}

// add class .incorrect to each element of the array incorrectTags
function paintInRed() {
	
	var i = 0;

	for (var i = 0; i < incorrectTags.length; i++) {
		incorrectTags[i].classList.add('incorrect');		
	}
}

// checks the array of text elements for emptiness
function textInputIsEmpty(inputs) {
	
	var i = 0;

	for (var i = 0; i < inputs.length; i++) {
		if (inputs[i].value == '') {
			// add empty tag input to the incorrectTags array
			incorrectTags[incorrectTags.length] = inputs[i];
			// ... and the corresponding tag label
			incorrectTags[incorrectTags.length] = document.querySelector('label[for=' + inputs[i].name + ']');
		}
	}
}

function genderIsEmpty(inputs) {

	var i = 0;

	for (var i = 0; i < inputs.length; i++) {
		if (inputs[i].checked) {
			// if an .checked element is found then exit
			return;
		}
	}
	
	// if not found then ...
	// add tag input radio to the incorrectTags array
	incorrectTags[incorrectTags.length] = document.querySelector('div.gender');
	// ... and the corresponding tag label
	incorrectTags[incorrectTags.length] = document.querySelector('label[for=gender]');
}

// delete class .incorrect from all tags
function deleteIncorrect() {

}