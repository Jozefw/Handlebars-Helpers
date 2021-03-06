$(function(){
	// register a helper
	Handlebars.registerHelper('caps', function(str){
		// we pass string to the helper
		str = str || '';
		return str.slice(0,1).toUpperCase() + str.slice(1);
	});

	// grab template script form index page
	var templateScript = $('#helperTemplate').html();

	// compile template
	var template = Handlebars.compile(templateScript);

	// our context data
var context ={
	animals:[
	{ name:"cow",
		noise:"moooo"},
	{ name:"fish",
		noise:''}
	]
};

// send this data to the template
var compiledHtml = template(context);

// add data to html index page
$('.templateInfo').html(compiledHtml);



var blockScript = $('#blockTemplate').html();

Handlebars.registerHelper('cheat', function(options){
	// the options object has a special function (fn) which is a compiled version of the template
	return options.fn(this).toUpperCase();
});

var ContextData = {
	"code": "up and down with the joystick"
};

var compiledData = blockScript(ContextData);

$(".block").html(compiledData);

});