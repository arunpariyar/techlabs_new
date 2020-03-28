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
import UX from "../assets/UX.png"
import UX2 from "../assets/UX2.png"
import david from "../assets/david.png"
import { Link } from "gatsby"
import background from "../assets/ds_background.png"
import backgroundMobil from "../assets/courseMobil.png"
import {FormattedMessage} from "gatsby-plugin-intl"


class ux extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container-fluid">
          <ProgrammHero
            headingFirst={
              <FormattedMessage id={"ux.headline.ProgrammHero.headingFirst"} />
            } 
            headingSecond={
              <FormattedMessage id={"ux.headline.ProgrammHero.headingSecond"} />
            } 
            showCard={true}
            background={background}
            intro={
              <FormattedMessage id={"ux.headline.ProgrammHero.intro"} />
            } 
            backgroundMobil={backgroundMobil}
          />
        </div>
        <div className="container">
          <RightImageSection
            heading={
              <FormattedMessage id={"ux.what.RightImageSection.heading"} />
            } 
            subheading={
              <FormattedMessage id={"ux.what.RightImageSection.subheading"} />
            } 
            text={
              <FormattedMessage id={"ux.what.RightImageSection.text"} />
            } 
            image={UX2}
          />
          <RightImageSection
            heading={
              <FormattedMessage id={"ux.why.RightImageSection.heading"} />
            } 
            subheading={
              <FormattedMessage id={"ux.why.RightImageSection.subheading"} />
            } 
            text={
              <FormattedMessage id={"ux.why.RightImageSection.text"} />
            } 
            image={UX}
          />
          <WhatYouWillLearn
            intro={
              <FormattedMessage id={"ux.learn.WhatYouWillLearn.intro"} />
            } 
            first={
              <FormattedMessage id={"ux.learn.WhatYouWillLearn.first"} />
            } 
            second={
              <FormattedMessage id={"ux.learn.WhatYouWillLearn.second"} />
            } 
            third={
              <FormattedMessage id={"ux.learn.WhatYouWillLearn.third"} />
            } 
            fourth={
              <FormattedMessage id={"ux.learn.WhatYouWillLearn.fourth"} />
            } 
          />
          <LeftImageSection
            heading={
              <FormattedMessage id={"ux.more.LeftImageSection.heading"} />
            } 
            subheading={
              <FormattedMessage id={"ux.more.LeftImageSection.subheading"} />
            } 
            text={
              <FormattedMessage id={"ux.more.LeftImageSection.text"} />
            } 
            image={david}
          />
          <Projects />
          <CallToAction />
          <FirstImpression
            heading={
              <FormattedMessage id={"ux.first_impression.FirstImpression.heading"} />
            } 
            subheading={
              <FormattedMessage id={"ux.first_impression.FirstImpression.subheading"} />
            } 
            firstHeading={
              <FormattedMessage id={"ux.first_impression.FirstImpression.firstHeading"} />
            } 
            firstImage={UX2}
            firstText={
              <FormattedMessage id={"ux.first_impression.FirstImpression.firstText"} />
            } 
            firstLink="https://app.edyoucated.org/login"
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

export default ux
