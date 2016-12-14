YUI().use(
	'aui-alert',
	function(Y) {
		new Y.Alert(
			{
				animated: true,
				bodyContent: 'This is animated alert alert',
				boundingBox: '#fancyAlert',
				closeable: true,
				cssClass: 'alert-info', /* try alert, alert-warning, alert-danger */
				destroyOnHide: false,
				duration: 2,
				render: true
			}
		);
	}
);