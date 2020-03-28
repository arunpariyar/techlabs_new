import React, { Component } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProgrammHero from "../components/ProgrammHero"
import WhatYouWillLearn from "../components/WhatYouWillLearn"
import RightImageSection from "../components/RightImageSection"
import LeftImageSection from "../components/LeftImageSection"
import Projects from "../components/Projects"
import CallToAction from "../components/CallToAction"
import FirstImpression from "../components/FirstImpression"
import FaqQuestion from "../components/FaqQuestion"
import david from "../assets/david.png"
import dashboard from "../assets/dashboard.png"
import webDevCover from "../assets/wd_cover.png"
import background from "../assets/ds_background.png"
import Faq from "../components/Faq"
import { Link } from "gatsby"
import backgroundMobil from '../assets/courseMobil.png';
import {FormattedMessage} from "gatsby-plugin-intl"


class web extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container-fluid">
          <ProgrammHero
            headingFirst={
              <FormattedMessage id={"web.headline.ProgrammHero.headingFirst"} />
            } 
            headingSecond={
              <FormattedMessage id={"web.headline.ProgrammHero.headingSecond"} />
            } 
            showCard={true}
            background={background}
            intro={
              <FormattedMessage id={"web.headline.ProgrammHero.intro"} />
            } 
            backgroundMobil={backgroundMobil}
          />
        </div>
        <div className="container">
          <RightImageSection
            heading={
              <FormattedMessage id={"web.what.RightImageSection.heading"} />
            } 
            subheading={
              <FormattedMessage id={"web.what.RightImageSection.subheading"} />
            } 
            text={
              <FormattedMessage id={"web.what.RightImageSection.text"} />
            } 
            image={dashboard}
          />
          <RightImageSection
            heading={
              <FormattedMessage id={"web.why.RightImageSection.heading"} />
            } 
            subheading={
              <FormattedMessage id={"web.why.RightImageSection.subheading"} />
            } 
            text={
              <FormattedMessage id={"web.why.RightImageSection.text"} />
            } 
            image={webDevCover}
          />
          <WhatYouWillLearn
            intro={
              <FormattedMessage id={"web.learn.WhatYouWillLearn.intro"} />
            } 
            first={
              <FormattedMessage id={"web.learn.WhatYouWillLearn.first"} />
            } 
            second={
              <FormattedMessage id={"web.learn.WhatYouWillLearn.second"} />
            } 
            third={
              <FormattedMessage id={"web.learn.WhatYouWillLearn.third"} />
            } 
            fourth={
              <FormattedMessage id={"web.learn.WhatYouWillLearn.fourth"} />
            } 
          />
          <LeftImageSection
            heading={
              <FormattedMessage id={"web.more.LeftImageSection.heading"} />
            } 
            subheading={
              <FormattedMessage id={"web.more.LeftImageSection.subheading"} />
            } 
            text={
              <FormattedMessage id={"web.more.LeftImageSection.text"} />
            } 
            image={david}
          />
          <Projects />
          <CallToAction />
          <FirstImpression
            heading={
              <FormattedMessage id={"web.first_impression.FirstImpression.heading"} />
            } 
            subheading={
              <FormattedMessage id={"web.first_impression.FirstImpression.subheading"} />
            } 
            firstHeading={
              <FormattedMessage id={"web.first_impression.FirstImpression.firstHeading"} />
            } 
            firstImage={dashboard}
            firstText={
              <FormattedMessage id={"web.first_impression.FirstImpression.firstText"} />
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

export default web
