import React from "react";
import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";

const Recommendations = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(
    `/${mediaType}/${id}/recommendations`
  );
  return (
    <>
      <ContentWrapper>
        <div className="sectionHeading">Recommendations</div>
      </ContentWrapper>
      <Carousel
        title="Recommendations"
        data={data?.results}
        loading={loading}
        endpoint={mediaType}
      />
    </>
  );
};

export default Recommendations;
