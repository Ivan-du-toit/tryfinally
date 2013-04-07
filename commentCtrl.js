function commentCtrl($scope, $http, $filter) {
	$scope.comments = [];
 	$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

 	$http.get('comment.php').success(function(data) {
 		$scope.comments = data;
 	});

  	$scope.addComment = function() {
  		var newComment = {"author": document.getElementById('author').innerHTML, "title": document.getElementById('title').innerHTML, "comment": document.getElementById('comment').innerHTML}
  		newComment.timestamp = "just now";
		$scope.comments.push(newComment);
		$http.post('comment.php', 'comment='+$filter('json')(newComment));
  	};
}