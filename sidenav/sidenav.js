YUI().use(
	'aui-node',
	function(Y) {
		var node = Y.one('#toggleNav');
		var current = true;

		node.on(
			'click',
			function() {
				if (current == true){
					node.setStyle('width', 5);
					node.setStyle('transition', 'width 0.2s ease-in-out');
					node.setStyle('overflow-x', 'hidden');
					current = false;
				}else{
					node.setStyle('width', 250);
					current = true;
					node.setStyle('transition', 'width 0.2s ease-in-out');

				}
			}
		);
	}
);


YUI().use(
	'aui-button',
	function(Y) {
		new Y.ToggleButton(
			{
				label: 'Click to Toggle',
				srcNode: '#toggleNav',
				boundingBox: '#myToggleButton'
			}
		).render();
	}
);