YUI().use(
	'aui-node', 'event',
	function(Y) {
		var node = Y.one('#toggleNav');
			toggleBtn = Y.one('#toggleBtn');
			current = true;

		toggleBtn.on(
			'click',
			function() {
				if (current == true){
					node.setStyle('width', 5);
					node.setStyle('transition', 'width 0.1s ease-in-out');
					node.setStyle('overflow-x', 'hidden');
					current = false;
				}else{
					node.setStyle('width', 250);
					node.setStyle('transition', 'width 0.1s ease-in-out');
					current = true;
				}
			}
		);
	}
);
