import MediaGrid from "../components/Layout/MediaGrid";
import Section from "../components/Section";
import SkeletonLoader from "../components/Loader/SkeletonLoader";
import useFeaturedPlaylists from "../hooks/useFeaturedPlaylists";
import { routes } from "../shared/routes";

export default function Home() {
  const featuredPlaylists = useFeaturedPlaylists(5);

  return (
    <div className="mt-20 px-7">
      <h1 className="sr-only">Home</h1>

      {!featuredPlaylists ? (
        <SkeletonLoader />
      ) : (
        <>
          <Section heading="Spotify Playlists">
            <MediaGrid
              mediaPageRoute={routes.PLAYLIST}
              media={featuredPlaylists ? featuredPlaylists.items : null}
            />
          </Section>
        </>
      )}
    </div>
  );
}
