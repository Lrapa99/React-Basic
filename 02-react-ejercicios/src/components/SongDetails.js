import Message from "./Message";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null;
  return (
    <>
      {lyric.error || lyric.err || lyric.name === "ArbortError" ? (
        <Message
          msg={`Error: No existe la cancion "<em>${search.song}</em>"`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyric title={search.song}  lyrics={lyric.lyrics}/>
      )}
      {bio.artists ? (
        <SongArtist artist={bio.artists[0]}/>
      ) : (
        <Message
          msg={`Error: No existe el interprete "<em>${search.artist}</em>"`}
          bgColor="#dc3545"
        />
      )}
    </>
  );
};

export default SongDetails;
