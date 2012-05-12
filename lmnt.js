//
// ElementTraversal polyfill
//
// author: Ryan Corradini
// version: 1.0
// date: 10 May 2012
// license: MIT
//

// some browsers don't define this constant, which most of the widget bootstraps rely on
window.ELEMENT_NODE = document.ELEMENT_NODE || 1;

/*
nextElementSibling
previousElementSibling
firstElementChild
lastElementChild
childElementCount
children|childElements
*/
window.lmnt = function() {
    function _nextElementSibling( el ) {
        if (el.nextElementSibling) { return el.nextElementSibling; }
        do { el = el.nextSibling } while ( el && el.nodeType !== ELEMENT_NODE );
        return el;
    }

    function _previousElementSibling( el ) {
        if (el.previousElementSibling) { return el.previousElementSibling; }
        do { el = el.previousSibling } while ( el && el.nodeType !== ELEMENT_NODE );
        return el;
    }

    function _firstElementChild( el ) {
        if (el.firstElementChild) { return el.firstElementChild; }
        el = el ? el.firstChild : null;
        if ( el && el.nodeType == ELEMENT_NODE ) {
            return el;
        } else {
            return el.nextElementSibling || _nextElementSibling(el);
        }
    }

    function _lastElementChild( el ) {
        if (el.lastElementChild) { return el.lastElementChild; }
        el = el ? el.lastChild : null;
        if ( el && el.nodeType == ELEMENT_NODE ) {
            return el;
        } else {
            return el.previousElementSibling || _previousElementSibling(el);
        }
    }

    function _childElementCount( el ) {
        if (el.childElementCount) { return el.childElementCount; }
        if ( el && el.children ) { return el.children.length || 0; }
        var count = 0;
        el = el.firstChild;
        do {
            if ( el && el.nodeType == ELEMENT_NODE ) { count++; }
            el = el.nextSibling;
        } while ( el );
        return count;
    }

    return {
        nextElementSibling     : _nextElementSibling,
        previousElementSibling : _previousElementSibling,
        firstElementChild      : _firstElementChild,
        lastElementChild       : _lastElementChild,
        childElementCount      : _childElementCount
    }
}()
// end of ElementTraversal polyfills
