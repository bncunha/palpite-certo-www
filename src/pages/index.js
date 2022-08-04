import React from "react"
import LastFixtures from "../components/LastFixtures/last-fixtures"
import LiveSection from "../components/LiveSection/live-section"
import Header from "../components/Header/header"

const IndexPage = () => {
  return (
    <main>
      <Header />
      <LiveSection />
      <LastFixtures />
    </main>
  )
}

export default IndexPage
