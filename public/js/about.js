var about = new Vue({
  el: '#about',
  data: {
    user:
      {
      gender: "",
      name: {
      title: "",
      first: "",
      last: ""
      },
      location: {
      street: "",
      city: "",
      state: "",
      postcode: 0,
      coordinates: {
      latitude: "",
      longitude: ""
      },
      timezone: {
      offset: "",
      description: ""
      }
      },
      email: "",
      login: {
      uuid: "",
      username: "",
      password: "",
      salt: "",
      md5: "",
      sha1: "",
      sha256: ""
      },
      dob: {
      date: "",
      age: 0
      },
      registered: {
      date: "",
      age: 0
      },
      phone: "",
      cell: "",
      id: {
      name: "",
      value: ""
      },
      picture: {
      large: "",
      medium: "",
      thumbnail: ""
      },
      nat: ""
      }
},

methods: {
    fetchAbout () {
      fetch('https://www.randomuser.me/api/')
      .then( response => response.json() )
      .then( json => {about.user = json.results[0]} )
      .catch( err => {
        console.log('USER FETCH ERROR:');
        console.log(err);
      })
    },
    pretty_date: function (d) {
      return moment(d).format('l')
    }
},
created () {
      this.fetchAbout();
    }

})
