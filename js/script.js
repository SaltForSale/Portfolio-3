var chain = $("#chains")[0];
$(".img-wrapper").mouseenter(function () {
  chain.currentTime = 0;
  chain.play();
});


const vue_app = Vue.createApp({
  // This automatically imports your movies.json file and puts it into
  //   the variable: movies
  created() {
        fetch('projects.json').then(response => response.json()).then(json => {
              this.projects = json
        })
  },
  data() {
        return {
              // This holds your movies.json data.
              projects: [],
              /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
        }
  },
  method() {
    
  }
})

vue_app.mount("#vue_app")