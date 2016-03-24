'use strict';

angular.module('Client', ['ngResource', 'ngRoute'])
	.config(function($routeProvider){


		$routeProvider.when('/notes',{
			templateUrl: 'views/note/index.html',
			controller: 'IndexNoteCtrl'
		})
		.when('/notes/:id',{
			templateUrl: 'views/note/mostrar.html',
			controller: 'GetNoteCtrl'
		})
		.when('/notes/new',{
			templateUrl: 'views/note/create.html',
			controller: 'CreateNoteCtrl'
		})
		.otherwise({
			redirectTo:'/'
		});

	});