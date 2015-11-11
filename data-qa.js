LocatorBuilders.add('data-qa', function (e) {
    if (e.dataset.qa) {
        return 'css=[data-qa="' + e.dataset.qa + '"]';
    }
    return null;
});

//make 'data-qa' the default
LocatorBuilders.order.splice(0, 0, 'data-qa');