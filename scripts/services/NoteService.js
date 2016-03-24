'use strict';
angular.module('Client')
	.factory('NoteResource', function($resource){

		return $resource("http://laraangular.app:8000/notes/:id", {id:"@id"},
			{ list: {method:'GET',isArray: true },
			save: {method:'POST'},
			get: {method:'GET'}

			}
			);

});