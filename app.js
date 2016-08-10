new Vue({
  el: '#app',
  data: {
    tab: 0,
    playing: 0,
    podcasts: [],
    audio: 0,
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
    audiojs.events.ready(function() {
        self.audio = audiojs.createAll();
    });
  },
  filters: {
    limit: function(arr, limit) {
      if(!arr) return;
      return arr.slice(0, Number(limit));
    }
  },
  methods: {
    play: function(episode) {
      this.playing = episode;
      this.audio[0].load(episode.url);
      this.audio[0].play(); 
    }
  }

});