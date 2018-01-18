const APIUtil = require('./api_util');

class UsersSearch {
  constructor(el, options) {
    this.$el = $(el);
    this.$input = this.$el.find('input[name=query]');
    this.$ul = this.$el.find('ul');
    this.$input.on('input', this.handleInput.bind(this));
  }

handleInput() {
    // event.preventDefault();

    let success = (userData) => {
      console.log(userData);
    };

    console.log(this.$input.val());
    let input = {'query': this.$input.val()};
    APIUtil.searchUsers(input).then((userData) => success(userData));

  }
}


module.exports = UsersSearch;
