function Button(text) {
	this.text = text || "Hello";
};

Button.prototype = {
	create: function() {
		var self = this;	
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function() {
			alert(self.text);
		});
		$('body').append(this.$element);
	}
}

var btn1 = new Button("Hello, które wpisałem sam");
var btn2 = new Button("rabarbar")
var btn3 = new Button();

btn1.create();
btn2.create();
btn3.create();