export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)
    const params = searchParams.get('s')
    const url = `https://api.themoviedb.org/3/search/movie?query=${params}&include_adult=false&language=en-US&page=1`
    const getOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+process.env.TMDB_API_KEY,
      },
    }
    var movies = await fetch(url, getOptions).then(res => res.json()).then(data => data.results)
    return Response.json(movies)
  } catch (error) {
    console.log(error)
    return Response.json([])
  }
}