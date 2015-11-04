<!DOCTYPE html>
<html ng-app="todoApp">
<head>
<title>TO DO List</title>

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css" integrity="sha384-aUGj/X2zp5rLCbBxumKTCw2Z50WgIr1vs/PFN4praOTvYXWlVyh2UtNUU0KAUhAX" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>

<script src="/Scripts/angular.min.js"></script>
<script src="/Scripts/todoapp.js"></script>


</head>
<body ng-controller="ToDoCtrl">
	<div class="page-header">
		<h1>
			{{todo.user}}'s To Do List
			<span class="label">{{todo.items.length}}</span>
		</h1>
	</div>
	<div class="panel">

		<div class="input-group">
			<input class="form-control" />
			
			<span class="input-group-btn">
				<button class="btn btn-default">Add</button>
			</span>
		</div>
		
		<table class="table table-striped">
			<thead>
				<tr>
					<th>Description</th>
					<th>Done</th>
				</tr>
			</thead>
			<tbody>
				<tr ng-repeat="item in todo.items">
					<td>{{item.action}}</td>
					<td>{{item.done}}</td>
				</tr>
			</tbody>
		</table>

	</div>
</body>
</html>