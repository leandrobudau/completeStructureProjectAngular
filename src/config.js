app.config(function ($httpProvider) {
    //Adding interceptors
    $httpProvider.interceptors.push('requisitionInterceptor');
    
});