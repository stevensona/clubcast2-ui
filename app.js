new Vue({
  el: '#app',
  data: {

    tab: 0,
    playing: 0,
    podcasts: [
      {
        title: 'Latest',
        description: 'Recent releases by all your favorite producers',
        episodes: [
          {
            title: 'Hardwell On Air 279',
            artist: 'Hardwell',
            summary: '&quot;Hardwell On Air&quot; will give everyone&apos;s weekend that extra boost, by bringing that trendsetting and original Hardwell sound! Next to Hardwell &apos;s latest floorfillers, the show gives a platform to new DJ talent with the item &quot; Demo of the Week&quot;. Be sure to tune in!',
            podcast: 'Hardwell On Air',
            date: 'Friday, January 15, 2016 9:59 PM',
            thumbnail: 'http://test.podcast.djhardwell.com/hoa279.jpg',
            tracks: [
              'track 1 by Hardwell',
              'track 2 by Tritonal',
              'some other track',
              'the last track'
            ]
          },
          {title: 'AOKI\'S HOUSE 158', artist: 'Steve Aoki', podcast: 'AOKI\'S HOUSE', thumbnail: 'http://static.libsyn.com/p/assets/7/7/8/8/7788cf7a4d4322d5/aokishouse_podcast_2014_1400x1400.jpg'},
          {title: 'AOKI\'S HOUSE 157', artist: 'Steve Aoki', podcast: 'AOKI\'S HOUSE', thumbnail: 'http://static.libsyn.com/p/assets/7/7/8/8/7788cf7a4d4322d5/aokishouse_podcast_2014_1400x1400.jpg'}
      ]},
      {
        title: 'Random',
        artist: 'Various',
        description: 'Random episodes of your favorite EDM podcasts',
        episodes: [
          {
            title: 'AOKI\'S HOUSE 158',
            artist: 'Steve Aoki',
            podcast: 'AOKI\'S HOUSE',
            thumbnail: 'http://static.libsyn.com/p/assets/7/7/8/8/7788cf7a4d4322d5/aokishouse_podcast_2014_1400x1400.jpg'
          }
      ]},
      {title: 'Martin Garrix Show', artist: 'Various', episodes: []},
      {title: 'Club Life', artist: 'Tiesto', episodes: []},
      {title: 'Hardwell On Air', artist: 'Hardwell', episodes: []},
      {title: 'Tritonia', artist: 'Tritonal', episodes: []},
      {title: 'Hexagon Radio', artist: 'Don Diablo', episodes: []}
    ],
  }
});