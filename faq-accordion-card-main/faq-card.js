var questions = document.getElementsByClassName('question');
var openedCollapsible = [];
var i;

for (i = 0; i < questions.length; i++) {
	questions[i].addEventListener('click', function() {
		var arrow = this.nextElementSibling;
		var answer = this.nextElementSibling.nextElementSibling;
		arrow.classList.toggle("arrow-rotate");
		if (answer.style.maxHeight) {
			answer.style.maxHeight = null;
			openedCollapsible.pop();
			this.style.fontWeight = "400";
		} else {
			if (openedCollapsible.length == 0) {
				openedCollapsible.push(this);
			} else {
				var alreadyOpened = openedCollapsible.pop();
				alreadyOpened.click();
				openedCollapsible.push(this);
			}
			answer.style.maxHeight = answer.scrollHeight + "px";
			this.style.fontWeight = "700";
		}
		this.classList.toggle("question-highlight");
	});
}
