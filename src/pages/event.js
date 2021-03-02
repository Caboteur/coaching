import React from "react";
import { graphql, StaticQuery } from 'gatsby'
import Events from "../components/events.js"

export default function Event() {

  return  (
  <StaticQuery
    query={graphql`
      query MyQuery {
        contentfulNouveauCafeClown {
        lieu
        tarif
        date
      }
    }
    `}
    render={(data) => (

      <Events lieu={data.contentfulNouveauCafeClown.lieu} tarif={data.contentfulNouveauCafeClown.tarif} date={data.contentfulNouveauCafeClown.date} />
    )}
  />
)
}
