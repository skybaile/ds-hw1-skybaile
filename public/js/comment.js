var commentApp = new Vue({
  el: '#commentMain',
  data: {
    comments: [],
    commentForm: { },   // populated by this.getEmptyWorkForm()
  },

  methods: {
    handleCommentForm(e) {
      e.preventDefault();

      const s = JSON.stringify(this.commentForm);
      console.log(s);

      fetch('api/comment.php', {
        method: "POST",
        headers:{
          "Content-Type": "application/json; charset=utf-8"
        },
        body: s
      })
      .then( response => response.json() )
      .then( json => {this.comments.push(json)})
      .catch( err => {
        console.error('WORK POST ERROR:');
        console.error(err);
      })

      this.commentForm = this.getEmptyCommentForm();
    },

    getEmptyCommentForm() {
      return {
        comment:null
      }
    },

    fetchComments() {
      fetch ('api/comment.php')
      .then( response => response.json() )
      .then( json => {commentApp.comments = json} )
      .catch( err => {
        console.error('COMMENT ERROR:');
        console.error(err);
      });
  },
},

created () {
  this.fetchComments();
  }
})
