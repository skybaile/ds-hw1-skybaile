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

    fetch('api/comment.php', {
      method: "POST",
      headers:{
        "Content-Type": "application/json; charset=utf-8"
      },
      body: s
    })

    getEmptyCommentForm() {
      return {
        comment:null
      }
    },

    fetchComments('api/comment.php')
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
