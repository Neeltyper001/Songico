export default function DefaultSection(props){    
    return(
      <section>
  <div
    className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
  >
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div
        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
      >
        <img
          alt="Party"
          src="/assets/Images/landing-image-2.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Hum Your Voice</h2>
        <p className="mt-4 text-gray-600">
        The power of songs lies in their ability to evoke strong emotions, trigger memories, and create a sense of unity among listeners. Music enthusiasts often experience "earworms," where catchy tunes get stuck in their heads for extended periods.
        </p>

        <button
          
          className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
          
          onClick = {props.handleToggleSectionsDefault}
        >
          Let's go
        </button>
      </div>
    </div>
  </div>
</section>
    )
}