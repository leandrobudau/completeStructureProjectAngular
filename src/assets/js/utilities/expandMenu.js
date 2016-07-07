// (function () {
//     var findParent = function (element, nameClass) {
//         while (!element.classList.contains(nameClass)) {
//             element = element.parentElement
//         }
//         return element;
//     };
//     var toggleElement = function (element) {
//         for (var i = 0; i < element.length; i++)
//             element[i].classList.toggle('expand-menu__content__description--show');
//     };
//     var iconExpand = function () {
//         var expandMenu = document.getElementsByClassName('expand-menu');
//         for (var menu = 0; menu < expandMenu.length; menu++) {
//             menuVerticalCenter = expandMenu[menu].getElementsByClassName('expand-menu__icon-toggle--vertical-middle');
//             if (menuVerticalCenter.length > 0) {
//                 for (var j = 0; j < menuVerticalCenter.length; j++) {
//                     var heightIcon = parseFloat(menuVerticalCenter[j].offsetHeight);
//                     var topIcon = parseFloat(menuVerticalCenter[j].offsetTop);
//                     var total = topIcon - heightIcon;
//                     var drawer = findParent(expandMenu[menu], 'layout__drawer');

//                     menuVerticalCenter[j].setAttribute('style', 'top:' + total + 'px');

//                     menuVerticalCenter[j].addEventListener('click', function () {
//                         var icon = this.getElementsByClassName('material-icons')[0];
//                         var parent = findParent(icon, 'expand-menu');
//                         var menuDescription = parent.getElementsByClassName('expand-menu__content__description');
//                         toggleElement(menuDescription);

//                         if (icon.innerHTML == 'chevron_right') {
//                             icon.innerHTML = 'chevron_left';
//                             parent.classList.add('expand-menu__icon-toggle--open');
//                             parent.classList.remove('expand-menu__icon-toggle--close');
//                             drawer.classList.remove('layout__drawer--close');
//                         }
//                         else {
//                             icon.innerHTML = 'chevron_right';
//                             parent.classList.add('expand-menu__icon-toggle--close');
//                             parent.classList.remove('expand-menu__icon-toggle--open');
//                             drawer.classList.add('layout__drawer--close');

//                         }

//                     });
//                 }
//             }
//         }
//         var iconVerticalCenter = document.getElementsByClassName('expand-menu__icon-toggle--vertical-middle');

//     };

//     window.addEventListener('load', function () {
//         iconExpand();
//     });
// }());
