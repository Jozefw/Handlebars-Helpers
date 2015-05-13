$(function(){
	// register a helper
	Handlebars.registerHelper('capitalize', function(str){
		// we pass string to the helper
		str=str || '';
		return str.slice(0,1).toUpperCase + str.slice(1);
	});

	// grab template script form index page
	var templateScript = $('helperTemplate').html();

	// compile template
	var template = Handlebars.compile(templateScript);

	// our context data

var context ={
	animals:[
	{
		name:"cow",
		noise:"moooo"
	},
	{
		name:"cat",
		noise:"meow"
	},
	{
		name:"fish",
		noise:''
	}
	]
};

// send this data to the template
var compiledHtml = template(context);

// add data to html index page
$('templateInfo').html(compiledHtml);


});