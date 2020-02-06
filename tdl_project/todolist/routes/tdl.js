var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var dbconfig   = require('../config/database.js');
var connection = mysql.createConnection(dbconfig);

router.get('/:id', function(req, res, next) {

  var sql = 'SELECT * from todolist where user_id=?';
  var param = [req.body.id];
  connection.query(sql, param, function(err, data) {
    if(err) throw err;

    console.log('The solution is: ', rows);
    res.json(data);
  });
});

router.post('/', function(req, res, next) {
  var sql = 'INSERT INTO todolist (user_id, text, create_at) VALUES(?, ?, current_timestamp)';
  var param = [req.body.user_id, req.body.text];
  connection.query(sql, param, function(err, data) {
    if(err) throw err;

    console.log('The solution is: ', rows);
    res.json(data);
  });
});

router.post('/:id', function(req, res, next) {
  var sql = 'DELETE FROM todolist WHERE id=?';
  var param = [req.body.id];
  connection.query(sql, param, function(err, data) {
    if(err) throw err;


    console.log('The solution is: ', rows);
    res.json(data);
  });
});

module.exports = router;
