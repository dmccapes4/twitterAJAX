const APIUtil = require('./api_util');

class FollowToggle {
  constructor(el, options) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data('initial-follow-state');

    this.render();

    this.$el.on('click', this.handleClick.bind(this));
  }

  render() {
    switch (this.followState) {
      case 'followed':
        this.$el.text('Unfollow!');
        break;
      case 'unfollowed':
        this.$el.text('Follow!');
        break;
    }
  }

  async handleClick(event) {
    event.preventDefault();

    this.$el.prop('disabled', true);
    if (this.followState === 'followed') {
      await APIUtil.unfollowUser(this.userId);
    } else {
      await APIUtil.followUser(this.userId);
    }
    this.$el.prop('disabled', false);
    this.followState = this.followState === 'followed' ? 'unfollowed' : 'followed';
    this.render();
  }
}


module.exports = FollowToggle;
