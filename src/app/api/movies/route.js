export async function GET() {
  try {
    const url = 'https://api.themoviedb.org/3/movie'
    const getOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+process.env.TMDB_API_KEY,
      },
    }
    var popular = await fetch(url+'/popular?language=en-US&page=1', getOptions).then(res => res.json()).then(res => res.results.slice(0,15))
    popular = popular.map(async (movie) => {
      return await fetch(url+'/'+movie.id+'?language=en-US', getOptions).then(res => res.json())
    })
    popular = await Promise.all(popular)
    var upcoming = await fetch(url+'/upcoming?language=en-US&page=1', getOptions).then(res => res.json()).then(res => res.results.slice(0,8))
    upcoming = upcoming.map(async (movie) => {
      return await fetch(url+'/'+movie.id+'?language=en-US', getOptions).then(res => res.json())
    })
    upcoming = await Promise.all(upcoming)
    var continueWatching = await fetch(url+'/now_playing?language=en-US&page=1', getOptions).then(res => res.json()).then(res => res.results.slice(0,6))
    continueWatching = continueWatching.map(async (movie) => {
      return await fetch(url+'/'+movie.id+'?language=en-US', getOptions).then(res => res.json())
    })
    continueWatching = await Promise.all(continueWatching)    
    const genres = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', getOptions).then(res => res.json()).then(res => res.genres)

    return Response.json({popular, upcoming, continueWatching, genres})
  } catch (error) {
    console.log(error)
    return Response.json({popular:[], upcoming:[], continueWatching:[], genres:[], error})
  }
}