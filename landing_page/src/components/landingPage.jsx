import Landing from "./landing";
import { AhaOrignal } from "./ahaOrignals";
import { Handpicked } from "./handpicked";
import { Top10 } from "./top10";
import { NewRelease } from "./newRelease";
import { FreeMovies } from "./freeMovies";
import { MostWatched } from "./mostWatched";
import { Upcoming } from "./upcoming";
import { Thriller } from "./thriller";
import { Drama } from "./drama";
import { Romance } from "./romance";
import { NewAdd } from "./newleyAdded";
import { Geners } from "./genrers";
import { Actors } from "./actor";

export const LandingPage = () => {
  return (
    <>
      <Landing></Landing>
      <Handpicked heading="Handpicked"></Handpicked>
      <MostWatched heading="Most Watched"></MostWatched>
      <NewRelease heading="New Release"></NewRelease>
      <AhaOrignal heading="Aha Orignals"></AhaOrignal>
      <Top10 heading="Top10 Today"></Top10>

      <Upcoming heading="Upcoming on Aha"></Upcoming>
      <NewAdd heading="Newly Added"></NewAdd>
      <Geners heading="Geners"></Geners>
      <FreeMovies heading="Free Movies"></FreeMovies>
      <Thriller heading="Thriller On Aha"></Thriller>
      <Actors heading="Actors (A-Z)"></Actors>
      <Drama heading="Drama on Aha"></Drama>
      <Romance heading="Romance"></Romance>
    </>
  );
};
