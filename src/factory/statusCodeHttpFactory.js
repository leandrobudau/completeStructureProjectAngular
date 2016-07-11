app.factory("statusCodeHttpFactory", function () { 
    var _code = '';
    var _message = ''; 
    var _classIcon = 'fa fa-times';

    return {
        setCode: function(code) {
            _code = code;
        },
        setMessage: function (message) {
            _message = message;
        },
        setClassIcon: function (classIcon) {
            _classIcon = classIcon
        },
        getCode: function () {
            return _code;
        },
        getMessage: function () {
            return _message;
        },
        getClassIcon: function () {
            return _classIcon;
        }
    }
});