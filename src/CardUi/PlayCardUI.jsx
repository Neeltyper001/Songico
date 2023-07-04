export default function PlayCardUI(props){
    return(
    <>
    <button onClick={props.toggle_back} className="relative left-1/2 -translate-x-1/2 p-2 font-bold text-xl rounded-xl bg-yellow-900 text-yellow-300  border-4 ">Back</button>
    <div className=" mx-auto px-4 w-96 h-96 bg-slate-300 flex flex-col justify-around items-center rounded-2xl">
        <img src={props.toggle_player.toggleCoverImage} />
        <h1 className="text-2xl text-center font-bold">{props.toggle_player.toggleTrackName}</h1>
        <p className="text-center">{props.toggle_player.toggleArtistName}</p>
        <audio  src={props.toggle_player.togglePlayUrl} controls />
    </div>
    </>
    )
}