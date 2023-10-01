import SearchedMovies from "./SearchedMovies";

export default async function Search({searchParams}) {

  return (
    <SearchedMovies searchParams={searchParams} />
  )
}