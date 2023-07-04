export default function SongCardUI(props){    
    return(
    <div key={props.Index} className="flex flex-col px-4 justify-evenly items-center w-96 h-96 bg-gray-200 rounded-xl shadow-xl">
      <img className="rounded-xl" src={props.cover_image} />
      <h1 className="font-bold text-xl text-center">{props.track_name}</h1>
      <p className="text-center font-bold">{props.artist_name}</p>
      <button onClick={()=>{
            props.play_song(props)
      }} className="p-2 font-bold text-xl rounded-xl bg-yellow-900 text-yellow-300  border-4 ">Play</button>
  </div>
    )
}