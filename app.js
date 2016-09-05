Vue.component('episode', {
  props: ['episode', 'play', 'thumbnail'],
  template: '#episode'
});

Vue.component('now-playing', {
  props: ['playing'],
  template: '#now-playing'
});

Vue.component('playlist', {
  props: ['episodes', 'podcasts', 'audio', 'playing'],
  template: '#playlist',
  filters: {
    limit: function(arr, limit) {
      if(!arr) return;
      return arr.slice(0, Number(limit));
    },
    sortDate: function(a, b) {
      return (new Date(a.date) > new Date(b.date)) ? 1: -1;
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

var App = Vue.extend({
  data: function() {
    return {
      tab: this.tab,
      playing: this.playing,
      podcasts: this.podcasts,
      episodes: this.episodes,
      genres: ['Electronica', 'House', 'Trance'],
      audio: this.audio,
    }
  },
  ready: function () {
    var self = this;
    $.ajax({
      url: 'http://adamstevenson.me/clubcast2-ui/data.json',
      method: 'GET',
      success: function (data) {
          self.podcasts = data['podcasts'];
          self.episodes = data['episodes'];
      },
      error: function (error) {
          alert(JSON.stringify(error));
      }
    });
    audiojs.events.ready(function() {
        self.audio = audiojs.createAll();
    });
  }
});

var router = new VueRouter();

router.map({
  '/artist/:artist': { component: Vue.component('playlist')},
  '/genre/:genre': { component: Vue.component('playlist')},
  '/latest': { component: Vue.component('playlist')},
  '/random': { component: Vue.component('playlist')},
  '/': { component: Vue.component('playlist')}
})

router.start(App, '#app');

Vue.transition('zoom', {
  enterClass: 'zoomIn',
  leaveClass: 'fadeOut'
});