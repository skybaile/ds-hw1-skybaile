var commentApp = new Vue({
  el: '#commentMain',
  data: {
    comments: [
    {
      id: 0,
      comment: ''
    }
  ],

    commentForm: { },   // populated by this.getEmptyWorkForm()
  },

  methods: {
    handleWorkForm(e) {
      e.preventDefault();

      const s = JSON.stringify(this.commentForm);
      console.log(s);

      // POST to remote server
      fetch('api/comment.php', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: s // body data type must match "Content-Type" header
      })
      .then( response => response.json() )
      .then( json => {this.comment.push(json)})
      .catch( err => {
        console.error('COMMENT POST ERROR:');
        console.error(err);
      })

      // Reset workForm
      this.workForm = this.getEmptyWorkForm();
    },

    getEmptyCommentForm() {
      return {
        comment:null
      }
    },

    fetch('api/comment.php')
    .then( response => response.json() )
    .then( json => {commentApp.comments = json} )
    .catch( err => {
      console.error('COMMENT ERROR:');
      console.error(err);
    });
  },

},

created () {
  console.log('inside created.');
  this.fetchComments();
}
