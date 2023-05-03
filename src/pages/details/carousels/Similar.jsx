import React from "react";
import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";

const Similar = ({ mediaType, id }) => {
  const { data, loading } = useFetch(`/${mediaType}/${id}/similar`);
  const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";
  return (
    <>
      <ContentWrapper>
        <div className="sectionHeading">{title}</div>
      </ContentWrapper>

      <Carousel
        title={title}
        data={data?.results}
        loading={loading}
        endpoint={mediaType}
      />
    </>
  );
};

export default Similar;
