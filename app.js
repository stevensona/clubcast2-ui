new Vue({
  el: '#app',
  data: {

    tab: 0,
    playing: 0,
    podcasts: [],
  },
  ready: function () {
    var self = this;
    $.ajax({
      url: 'https://raw.githubusercontent.com/stevensona/clubcast2-ui/master/data.json',
      method: 'GET',
      success: function (data) {
          self.podcasts = data;
      },
      error: function (error) {
          alert(JSON.stringify(error));
      }
    });
  }

});