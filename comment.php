<?php
if (isset($_POST['comment'])) {
	$comment = json_decode($_POST['comment']);
	$comment->timestamp = date('H:i j M Y');
	$comments = json_decode(file_get_contents("comments.json"));
	$comments[] = $comment;
	file_put_contents("comments.json", json_encode($comments));

} else {
	echo file_get_contents("comments.json");
}
?>