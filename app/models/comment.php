<?php

class Comment
{
  public $id;
  public $comment;

  public function __construct($data) {
    $this->id = intval($data['id']);
    $this->comment = $data['comment'];
  }
  public function create() {
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    $sql = 'INSERT Homework (id, comment)
            Values (?, ?)';
    $statement = $db->prepare($sql);
    $success = $statement->execute([
      $this->id,
      $this->comment
    ]);
    $this->id = $db->lastInsertId();
  }

  public static function fetchAll() {
    // 1. Connect to the database
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);

    // 2. Prepare query
    $sql = 'SELECT * FROM Homework';
    
    $statement = $db->prepare($sql);

    // 3. Run query
    $success = $statement->execute();

    // 4. Handle results
    $arr = [];
    while ($data = $statement->fetch(PDO::FETCH_ASSOC)) {
      $newComment =  new Comment($data);
      array_push($arr, $newComment);
    }
    return $arr;
  }
}
