const BgMovieDetails = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1 w-1/2">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
      <div className="flex gap-2">
        <button type="button" className="inline-block px-6 py-1 text-xs font-medium leading-6 text-center text-white uppercase transition bg-black rounded shadow ripple waves-light hover:shadow-lg focus:outline-none hover:bg-black">Play</button>
        <button type="button" className="inline-block px-6 py-1 text-xs font-medium leading-6 text-center text-black uppercase transition bg-transparent border-2 border-black rounded ripple hover:bg-gray-100 focus:outline-none waves-effect">More Info</button>
      </div>
    </div>
  )
}

export default BgMovieDetails