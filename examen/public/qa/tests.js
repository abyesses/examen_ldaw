suite('Test Title', function(){
	test('Page has a valid title', function(){
		assert(document.title && document.title.match(/\S/) && document.title.toUpperCase() !== 'TODO');
	});
});
suite('Menu exists', function(){
	test('Page has menu', function(){
		assert(document.getElementById("menu"));
	});
});