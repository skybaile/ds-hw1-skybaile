var about = new Vue({
  el: '#about',
  data: {
    user:  [
      (
        name: '',
        address: '',
        phonenumber: '',
        email: '',
        birthday: '',
        age: '',
      )
    ]
},

methods: {
    fetchAbout () {
      fetch('https://raw.githubusercontent.com/tag/iu-msis/dev/public/p1-tasks.json')
      .then( response => response.json() )
      .then( json => {about.user = json} )
      .catch( err => {
        console.log('TASK FETCH ERROR:');
        console.log(err);
      })
    },
    }

})
