export default class HomeController {
  constructor($http, homeService) {
    this.$http = $http
    this.home = homeService
  }

  $onInit() {
    this.home.getTestData().then(function(resp) {
      console.log(resp.data)
    })
  }
}

HomeController.$inject = ['$http', 'home']
