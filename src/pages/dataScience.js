import React, { Component } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProgrammHero from "../components/ProgrammHero"
import Faq from "../components/Faq"
import WhatYouWillLearn from "../components/WhatYouWillLearn"
import RightImageSection from "../components/RightImageSection"
import LeftImageSection from "../components/LeftImageSection"
import Projects from "../components/Projects"
import CallToAction from "../components/CallToAction"
import FirstImpression from "../components/FirstImpression"
import FaqQuestion from "../components/FaqQuestion"
import dsCover from "../assets/ds_cover.png"
import david from "../assets/david.png"
import dashboard from "../assets/dashboard.png"
import { Link } from "gatsby"
import background from "../assets/ds_background.png"
import backgroundMobil from "../assets/courseMobil.png"
import {FormattedMessage} from "gatsby-plugin-intl"


class dataScience extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container-fluid">
          <ProgrammHero
            headingFirst={
              <FormattedMessage id={"dataScience.headline.ProgrammHero.headingFirst"} />
            } 
            headingSecond={
              <FormattedMessage id={"dataScience.headline.ProgrammHero.headingSecond"} />
            } 
            showCard={true}
            background={background}
            intro={
              <FormattedMessage id={"dataScience.headline.ProgrammHero.intro"} />
            } 
            backgroundMobil={backgroundMobil}
          />
        </div>
        <div className="container">
          <RightImageSection
            heading={
              <FormattedMessage id={"dataScience.why.RightImageSection.heading"} />
            } 
            subheading={
              <FormattedMessage id={"dataScience.why.RightImageSection.subheading"} />
            } 
            text={
              <FormattedMessage id={"dataScience.why.RightImageSection.text"} />
            } 
            image={dsCover}
          />
          <WhatYouWillLearn
            intro={
              <FormattedMessage id={"dataScience.learn.WhatYouWillLearn.intro"} />
            } 
            first={
              <FormattedMessage id={"dataScience.learn.WhatYouWillLearn.first"} />
            } 
            second={
              <FormattedMessage id={"dataScience.learn.WhatYouWillLearn.second"} />
            } 
            third={
              <FormattedMessage id={"dataScience.learn.WhatYouWillLearn.third"} />
            } 
            fourth={
              <FormattedMessage id={"dataScience.learn.WhatYouWillLearn.fourth"} />
            } 
          />
          <LeftImageSection
            heading={
              <FormattedMessage id={"dataScience.more.LeftImageSection.heading"} />
            } 
            subheading={
              <FormattedMessage id={"dataScience.more.LeftImageSection.subheading"} />
            } 
            text={
              <FormattedMessage id={"dataScience.more.LeftImageSection.text"} />
            } 
            image={david}
          />
          <Projects />
          <CallToAction />
          <FirstImpression
            heading={
              <FormattedMessage id={"dataScience.first_impression.FirstImpression.heading"} />
            } 
            subheading={
              <FormattedMessage id={"dataScience.first_impression.FirstImpression.subheading"} />
            } 
            firstHeading={
              <FormattedMessage id={"dataScience.first_impression.FirstImpression.firstHeading"} />
            } 
            firstImage={dashboard}
            firstText={
              <FormattedMessage id={"dataScience.first_impression.FirstImpression.firstText"} />
            } 
            firstLink="https://app.edyoucated.org/login"
            secondHeading={
              <FormattedMessage id={"dataScience.first_impression.FirstImpression.secondHeading"} />
            } 
            secondImage={dashboard}
            secondText={
              <FormattedMessage id={"dataScience.first_impression.FirstImpression.secondText"} />
            } 
            secondLink="https://app.edyoucated.org/login"
          />
          <Faq>
            <FaqQuestion
              question={
                <FormattedMessage id={"faq.question1.question"} />
              } 
              answer={
                <FormattedMessage id={"faq.question1.answer"} />
              } 
            />
            <FaqQuestion
              question={
                <FormattedMessage id={"faq.question2.question"} />
              } 
              answer={
                <FormattedMessage id={"faq.question2.answer"} />
              } 
            />
            <FaqQuestion
              question={
                <FormattedMessage id={"faq.question3.question"} />
              } 
              answer={
                <FormattedMessage id={"faq.question3.answer"} />
              } 
            />
          </Faq>
          <div className="container pb-5">
            <div className="row">
              <div className="col text-center">
                <Link to="/faq" className="btn btn-primary">
                {
                  <FormattedMessage id={"faq.more.text"} />
                } 
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default dataScience
