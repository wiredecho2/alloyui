YUI().use(
	'aui-ace-editor',
	function(Y) {
		new Y.AceEditor(
			{
				boundingBox: '#myEditor',
				height: '100',
				mode: 'javascript',
				value: 'alert("write something here");'
			}
		).render();
	}
);

YUI().use(
	'aui-ace-editor',
	function(Y) {
		var editor = new Y.AceEditor(
			{
				boundingBox: '#myEditor2',
				height: '200',
				mode: 'javascript',
				value: 'alert("write something here");',
				width: '100%'
			}
		).render();

		var mode = Y.one('#language');

		if (mode) {
			var contents = {
				html: '<h2>Write something here....</h2>',
				javascript: 'alert("Write something here...");',
				json: '{"value": "Write something here"};',
				php: '<?php echo "Write something here..."; ?>',
				xml: '<value attr="something">Write something here...</value>'
			};

			var currentMode = 'javascript';

			var updateValue = function() {
				editor.set('value', contents[currentMode]);
			};

			mode.on(
				'change',
				function(event) {
					currentMode = this.val();
					editor.set('mode', currentMode);
					updateValue();
				}
			);
		}
	}
);