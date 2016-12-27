import angular from 'angular'
import uiRouter from 'angular-ui-router'
import headerComponent from './header.component'

export default angular.module('components.header', [
  uiRouter
])

.component('appHeader', headerComponent)

.name
