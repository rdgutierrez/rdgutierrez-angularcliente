'use strict';
angular.module('Client')
	.controller('IndexNoteCtrl', function($scope, NoteResource){
		$scope.notes = {};
		$scope.notes = NoteResource.list();
	})
		.controller('GetNoteCtrl', function($scope, NoteResource){
		$scope.note = {};
		$scope.note = NoteResource.get(id);
	})
	.controller('CreateNoteCtrl', function($scope, NoteResource){
		$scope.title = "Crear Nota";
		$scope.button = "Guardar";
		$scope.Note = {};
		$scope.saveNote = function(){
			//console.log($scope.Note);
			NoteResource.save($scope.Note);
		};

	});