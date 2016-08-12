var Episode = Vue.extend({
  props: ['episode', 'play', 'thumbnail'],
  template: `
    <div class="column is-one-third">
      <div class="card">
        <div class="card-image" @click="play(episode)">
          <figure class="image is-square"><img v-bind:src="episode.image" alt=""></figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-32x32"><img v-bind:src="thumbnail" alt=""></figure>
            </div>
            <div class="media-content">
              <p class="title is-5">{{episode.title}}</p>
              <p class="subtitle is-6">{{episode.artist}}</p>
            </div>
          </div>
          <div class="content">
            {{episode.duration}}
            <small>{{episode.date}}</small>
          </div>
        </div>
      </div>
    </div>`
});

var NowPlaying = Vue.extend({
  props: ['playing'],
  template:`
    <div class="container" v-show="playing">
      <nav class="panel">
        <div class="panel-heading">Now Playing</div>
        <div class="panel-block">
          <article class="media">
            <figure class="media-left">
              <p class="image is-96x96"><img v-bind:src="playing.image"></p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p><strong>{{playing.title}}</strong> <small>{{playing.artist}}</small></p>
                <p><audio src="" preload="none" /></p>
                <p>{{{playing.summary}}}</p>
              </div>
            </div>
          <div class="media-right">
            <a class="button">Show Tracklist</a>
            <a class="button">Download</a>
          </div>
          </article>
        </div>
      </nav>
    </div>
  `
});

Vue.component('episode', Episode);
Vue.component('now-playing', NowPlaying);

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
    },
    sortDate: function(a, b) {
      return (new Date(a.date) > new Date(b.date)) ? 1: -1;
    }

  }

});
