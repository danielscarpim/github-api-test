module.exports = function dataFactory($http){
  var dataFactory = {};
  var api = "https://api.github.com";

  dataFactory.getUser = function(user) {
    return $http.get(api+'/users/'+user);
  }

  dataFactory.getRepos = function(user) {
    return $http.get(api+'/users/'+user+'/repos');
  }

  return dataFactory
}
