YUI().use(
	'aui-button',
	function(Y) {
		new Y.Button(
			{
				icon: 'icon-print',
				iconAlign: 'left',
				label: 'Basic',
				srcNode: '#myButton'
			}
		).render();

		new Y.ToggleButton(
			{
				label: 'Click to Toggle',
				srcNode: '#myToggleButton'
			}
		).render();
	}
);

YUI().use(
	'aui-button',
	function(Y) {
		new Y.ButtonGroup(
			{
				boundingBox: '#myRadiogroup',
				type: 'radio'
			}
		).render();
	}
);