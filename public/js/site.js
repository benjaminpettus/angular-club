angular.module('Site', []);

var Site = angular.module('Site');

function SiteControl ($scope) {
  
}

Site
  .config(function ($routeProvider) {
    $routeProvider
      .when('/page/:slug', {templateUrl: 'partials/page.html', controller:
        'RouteController'})
      .otherwise({redirectTo: '/page/home'});
  });


function RouteController ($scope, $routeParams) {
  //getting the slug from $routeParams
  var slug = $routeParams.slug;

  //get the page data from the JSON file
  //$scope.page = ?
}

function SiteControl ($scope, $rootScope, $http) {
  //loade pages on startup
  $http.get('pages.json').success(function (data) {
    $rootScope.pages = data;
  });
}