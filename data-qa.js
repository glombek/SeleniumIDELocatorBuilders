LocatorBuilders.add('data-qa', function (e) {
    if (e.dataset.qa) {
        return 'css=[data-qa="' + e.dataset.qa + '"]';
    }
    return null;
});