app.factory('clientsAPI', function ($resource) {  
    return $resource('http://localhost:2588/api/clients/:guid',null, {"update":{method:"PUT"}});
});