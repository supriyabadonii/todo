import Todo from '../models/todo';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
export function getPosts(req, res) {
  Post.find().sort('-dateAdded').exec((err, posts) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ posts });
  });
}

/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */
export function addTodo(req, res) {

  let savingtodoObject ={};
  if(!req.body.tododata.todo ){
     res.json({ status: false, error : "Kindly enter some todo to add." });
  }else{
    Todo.findOne({ toDo: req.body.tododata.todo }, function(errorinFind, alreadyExists){
      if(alreadyExists){
        res.json({ status: false, error : "Make some other. This already exist." });
      }else{

      savingtodoObject["toDo"]  = req.body.tododata.todo;
      const objToDo = new Todo(savingtodoObject);
      Todo.create([objToDo], (error,data) => {
        if (!error) {
          res.json({ status: true,data:data, message : "Created Successfully." });
        }else{
          res.json({ status: false, error : "Error wile saving." });
        }
      });
      }
      
    });
  }
}

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
export function getPost(req, res) {
  Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post });
  });
}

/**
 * Delete a post
 * @param req
 * @param res
 * @returns void
 */
export function deletePost(req, res) {
  Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
    if (err) {
      res.status(500).send(err);
    }

    post.remove(() => {
      res.status(200).end();
    });
  });
}
