import template from './footer.tpl.html'
import controller from './footer.controller'
import './footer.scss'

export default {
  template,
  controller,
  bindings: {
    word: '@'
  }
}
