<?php
$comment = new Comment($POST);
$comment->create();
echo jason_encode($comment);
