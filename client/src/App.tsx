import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import Modal from "@/components/Modal/Modal";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import RouteBuilder from "./routes";
import React from "react";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import { Configure, InstantSearch } from "react-instantsearch-hooks-web";
import { FilterModal } from "./modals/FilterModal/FilterModal";

function App(props) {

  const searchClient = instantMeiliSearch(
    import.meta.env.VITE_MEILI_URL,
    import.meta.env.VITE_MEILI_MASTER_KEY
  );
  
  return (
    <InstantSearch indexName="product" searchClient={searchClient}>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <FilterModal />
        <Modal />
        <Header />
        <Configure hitsPerPage={21} />
        <div className="flex-grow">
          <RouteBuilder />
        </div>
        <Footer />
      </div>
    </InstantSearch>
  );
}

export default App;
