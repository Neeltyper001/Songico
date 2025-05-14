import { DEFAULT_ARTIST_NAME, DEFAULT_COVER_IMAGE, DEFAULT_PLAY_URL, DEFAULT_TRACK_NAME } from "../constants/constants.default"

class Track {

    constructor(track,resultCount) {
      this.coverImage = track?.artworkUrl100 ?? DEFAULT_COVER_IMAGE
      this.trackName = track?.trackName ?? DEFAULT_TRACK_NAME
      this.artistName = track?.artistName ?? DEFAULT_ARTIST_NAME
      this.playUrl = track?.previewUrl  ?? DEFAULT_PLAY_URL
      this.trackId = track?.trackId 
      this.resultCount = resultCount || 0    
    }
}

export {Track}