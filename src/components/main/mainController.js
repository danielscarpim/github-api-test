module.exports = function mainController($scope,dataFactory) {
  var main = this;
      main.user = {};
      main.user.repos = [];
      main.username = "";
      main.errors = {};
      main.errors.user = "";
      main.errors.repos = "";

      main.getUser = function() {
        main.errors = {};

        dataFactory.getUser(main.username).then(
          function success(response){
            main.user = response.data;
            console.log('MAIN.USER', main.user)
            if(main.user.public_repos > 0){
              main.getRepos(main.user.login);
            } else {
              main.errors.repos = "No repositories found for this user.";
            }
          },
          function error(response){
            if(response.status === 404){
              main.errors.user = "User not found.";
            } else {
              main.errors.user = "Error getting user. Please try again later.";
            }
          }
        );
      }

      main.getRepos = function(user){
        dataFactory.getRepos(user).then(
          function success(response){
            main.user.repos = response.data;
          },
          function error(response){
            main.errors.repos = "Error getting Repositories. Please try again later.";
          }
        )
      }

      main.getUser();
}
