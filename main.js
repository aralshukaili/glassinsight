var gi_app = angular.module('glassinsight', ['ui.router', 'ngAnimate', 'smoothScroll', 'imgUri'])
  

  .config(['$interpolateProvider',
  	function ($interpolateProvider) {
  		$interpolateProvider.startSymbol('[[');
  		$interpolateProvider.endSymbol(']]');
  	}
  ])
  
  .config(function($stateProvider, $urlRouterProvider, $uiViewScrollProvider){
    
    // For any unmatched url, send to /route1
    $urlRouterProvider.otherwise("/home")
    // $uiViewScrollProvider.useAnchorScroll();
    // console.log($anchorScroll);
    $stateProvider
      .state('home', {
          url: "/home",
          templateUrl: "main.html",
          controller: 'MainCtrl'
      })
      .state('services', {
          url: "/services",
          templateUrl: "main.html",
          controller: 'MainCtrl'
      })
        .state('services.iaas', {
            url: "/iaas",
            templateUrl: "iaas.html",
            controller: 'IaasCtrl'
        })
      
      .state('about_us', {
          url: "/about_us",
          templateUrl: "main.html",
          controller: 'MainCtrl'
      })
      
      .state('contact_us', {
          url: "/contact_us",
          templateUrl: "main.html",
          controller: 'MainCtrl'
      })

  })
  
  // .value('$anchorScroll', angular.noop)
  
  .controller('MainCtrl', ['$scope', '$rootScope', '$state', '$location', '$anchorScroll', 'smoothScroll',
  function($scope, $rootScope, $state, $location, $anchorScroll, smoothScroll){
    $scope.$on('$viewContentLoaded', function(event){
      var element = document.getElementById($state.current.name);
      if(element)
        smoothScroll(element);
    });
    
    
    $scope.atRoot = $state.current.name.indexOf('.') < 0;
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
      // console.log(toState);
      $scope.atRoot = toState.name.indexOf('.') < 0;
      
        
    });
 
    
    $scope.serviceList = [
      {
        title: 'infrastructure as a service',
        id: 'iaas',
        hero: 'assets/serverraum-led.jpg',
        state: 'services.iaas',
        excerpt: 'Some awesome description, make it short ans simple. no longer than this',
        subservices: [
          {title: 'cloud design', icon: 'cloud_design'},
          {title: 'cloud optimazation', icon:'optimization'},
          {title: 'networking', icon:'optimization'},
          {title: 'security', icon: 'security'}]
      },
      {
        title: 'platform as a service',
        id: 'paas',
        hero: 'assets/hype-cycle-for-networking-and-communications-image-2.jpg',
        excerpt: 'Some awesome description, make it short ans simple. no longer than this',
        subservices: [
          {title: 'preconfigured VM\'s', icon: 'php'}, 
          {title: 'storage', icon:'nodejs'}, 
          {title: 'backup & archiving', icon: 'python'},
          {title: 'billing', icon: 'security'}]
        // subservices: [{title: 'php', icon: 'php'}, {title: 'node js', icon:'nodejs'}, {title: 'python', icon: 'python'}, {title: '.net', icon: 'microsoft'}, {title: 'ruby', icon:'ruby'}, {title: 'java', icon: 'java'}]
      },
      {
        title: 'software as a service',
        id: 'saas',
        hero: 'assets/MobilePhoneApps1.jpg',
        excerpt: 'Some awesome description, make it short ans simple. no longer than this',
        subservices: [
          {title: 'crm', icon: 'python'}, 
          {title: 'project management', icon:'security'}, 
          {title: 'network monitoring', icon: 'php'}, 
          {title: 'office suite', icon:'optimization'}]
      }
      
    ];
  }])


  .controller('IaasCtrl', ['$scope', '$state', '$location', '$anchorScroll', 'smoothScroll', 
    function($scope, $state, $location, $anchorScroll, smoothScroll){
      // $scope.$on('$viewContentLoaded', function(event){
        // var element = document.getElementById('service-cards');
        // if(element)
        //   smoothScroll(element);
      // console.log($scope);
      
    }]);

// Manual initilisation of app
angular.element(document).ready(function() {
	if (!angular.element(document).injector()){
		angular.bootstrap(document, ['glassinsight']);
	}
});



