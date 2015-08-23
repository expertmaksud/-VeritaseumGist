(function () {
    if (window.NS === null || typeof (window.NS) == 'undefined') {
        window['NS'] = {};
    }

    window['NS']['areListsPresent?'] = function (root) {
        //Semicolon was missing so added semicolon
        found = totalSubarrayLengths([root.getElementsByTagName('ol'), root.getElementsByTagName('ul')]);
        return found != 0 ? true : false;
    }

    var totalSubarrayLengths = function (container) {
        //Declare variable out from local scope
        var total = 0;

        for (var val in container) {
            //Fix expression, delete var
            total = total + val.length;
        }

        //'total' was out of scope
        return total;
    }

    window['NS']['toggleSortableClickHandler'] = function (element) {
        //Code to add event was not correct, Add the event correctly
        element.addEventListener("click", function onClick(e) {
            if (element.getAttribute('class') == 'toggle-sortable') {
                //For/In loop was use then SortableElement was undefine as getElementsByClassName
                //return an array, so fix it using for loop
                var allSortableElement = document.getElementsByClassName('sortable');
                for (var i = 0, max = allSortableElement.length; i < max; i++) {
                    //Update code to get element from array
                    allSortableElement[i].setAttribute('class', '');
                }
            }
        }
		);
    }
})();

$(function () {
    //code in if condition was wrong, fix it
    if (window['NS']['areListsPresent?'](document)) {
        //For/In loop provided undefine element as getElementsByClassName
        //return an array, so fix it using for loop
        var allOl = document.getElementsByTagName('ol');
        for (var i = 0, max = allOl.length; i < max; i++) {
            //Update code to get element from array
            if (allOl[i].getAttribute('class') == 'sortable') {
                $(allOl[i]).sortable();
                $(allOl[i]).disableSelection();
            }
        }
        //For/In loop provided undefine element as getElementsByClassName
        //return an array, so fix it using for loop
        var allUl = document.getElementsByTagName('ul');
        for (var i = 0, max = allUl.length; i < max; i++) {
            //Update code to get element from array
            if (allUl[i].getAttribute('class') == 'sortable') {
                $(allUl[i]).sortable();
                $(allUl[i]).disableSelection();
            }
        }
        //window was missing and getElementById try to find item using '#', but it was jquery selector
        //Fix those
        window['NS'].toggleSortableClickHandler(document.getElementById('mytoggler'));
    }
})
