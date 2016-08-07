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
      url: 'http://adamstevenson.me/clubcast2-ui/data.json',
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