import SongCardUI from "../CardUi/SongCardUI"
export default function SongRender(props){        
        const songCards = props.songsData.map((currentSongObj,i)=>{            
            return(
                <>
                <SongCardUI
                    key = {i}
                    cover_image = {currentSongObj.artworkUrl100}
                    track_name = {currentSongObj.trackName}
                    artist_name = {currentSongObj.artistName}
                    play_url = {currentSongObj.previewUrl}
                    play_song = {props.playSong}
                />
                </>
            )
        })


        
    return(
        
        <div className="grid grid-cols-3 p-4 gap-y-8 place-items-center sz1240:grid-cols-2 sz820:grid-cols-1">
            {songCards}
        </div>
    )
}