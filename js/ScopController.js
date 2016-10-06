var app=angular.module('mainApp', []);
app.controller('ScopController', function($scope) {
	$scope.list = {
			'items' : [
			           {
			        	name : 'nvn',
			        	title : 'Front End Engineer',
			        	JobTitle : 'HK'
			           },
			           {
			        	name : 'ksk',
			        	title : 'Front End Engineer',
			        	JobTitle : 'Sencha'
			           },
			           {
			        	name : 'rach',
			        	title : 'Back End Engineer',
			        	JobTitle : 'PMI'
			        	},
			           {
		        		name : 'ajit',
			        	title : 'Back End Engineer',
			        	JobTitle : 'Metnet'
			        	},
						{
						 name : 'jish',
						 title : 'Sales Engineer',
						 JobTitle : 'Metlife'
						},
			           {
			        	name : 'amit',
			        	title : 'Sales Engineer',
			        	JobTitle : 'AGI'
			        		}
			           ]
	}
	
});
