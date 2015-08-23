(function(){
    if(window.NS === null || typeof(window.NS) == 'undefined') {
        window['NS'] = {};
    }
    
    window['NS']['areListsPresent?'] = function(root) {
        found = this.totalSubarrayLengths([ root.getElementsByTagName('ol'), root.getElementsByTagName('ul') ])
        return found != 0
            ? true
            : false;
    }

    var totalSubarrayLengths = function(container) {
        total = 0;

        for (var val in container) {
            var total += val.length;
        }
        
        return total;
    }

    window['NS']['toggleSortableClickHandler'] = function(element) {
        element.click = function onClick(e) {
            if (element.getAttribute('class') == 'toggle-sortable') {
                for (var sortable in document.getElementsByClassName('sortable')) {
                    sortable.setAttribute('class', '');
                }
            }
        }
    }
})();

if (NS.areListsPresent?(document)) {
    $(function() {
        for (ol in root.getElementsByTagName('ol')) {
            if (ol.getAttribute('class') == 'sortable') {
                $(ol).sortable();
                $(ol).disableSelection();
}
}

        for (ul in root.getElementsByTagName('ul')) {
            if (ul.getAttribute('class') == 'sortable') {
                $(ul).sortable();
                $(ul).disableSelection();
}
}
});

    NS.toggleSortableClickHandler(document.getElementById('#mytoggler'));
}