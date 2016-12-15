YUI().use('node', function(Y) {
    Y.delegate('click', function(e) {
        var buttonID = e.currentTarget.get('id'),
            node = Y.one('#demo');

        if (buttonID === 'show') {
            node.show();
        } else if (buttonID === 'hide') {
            node.hide();
        } else if (buttonID === 'toggle') {
            node.toggleView();
        }

    }, document, 'button');
});