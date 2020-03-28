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
import ai_cover from "../assets/ai_cover.png"
import david from "../assets/david.png"
import Faq from "../components/Faq"
import { Link } from "gatsby"
import robot from "../assets/ai-robot.png"
import background from "../assets/ds_background.png"
import backgroundMobil from '../assets/courseMobil.png';
import {FormattedMessage} from "gatsby-plugin-intl"


class ai extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container-fluid">
          <ProgrammHero
            headingFirst={
              <FormattedMessage id={"ai.ai.programmhero.headingFirst"} />
            } 
            headingSecond= {
            <FormattedMessage id={"ai.ai.programmhero.headingSecond"} />
            } 
            showCard={true}
            background={background}
            intro={
              <FormattedMessage id={"ai.ai.programmhero.intro"} />
            } 
            backgroundMobil={backgroundMobil}
          />
        </div>
        <div className="container">
          <RightImageSection
            heading={
              <FormattedMessage id={"ai.what.RightImageSection.heading"} />
            } 
            subheading={
              <FormattedMessage id={"ai.what.RightImageSection.subheading"} />
            } 
            text={
              <FormattedMessage id={"ai.what.RightImageSection.text"} />
            } 
            image={robot}
          />
          <RightImageSection
            heading={
              <FormattedMessage id={"ai.why.RightImageSection.heading"} />
            } 
            subheading={
              <FormattedMessage id={"ai.why.RightImageSection.subheading"} />
            } 
            text={
              <FormattedMessage id={"ai.why.RightImageSection.text"} />
            } 
            image={ai_cover}
          />
          <WhatYouWillLearn
            intro={
              <FormattedMessage id={"ai.learn.WhatYouWillLearn.intro"} />
            } 
            first={
              <FormattedMessage id={"ai.learn.WhatYouWillLearn.first"} />
            } 
            second={
              <FormattedMessage id={"ai.learn.WhatYouWillLearn.second"} />
            } 
            third={
              <FormattedMessage id={"ai.learn.WhatYouWillLearn.third"} />
            } 
            fourth={
              <FormattedMessage id={"ai.learn.WhatYouWillLearn.fourth"} />
            } 
          />
          <LeftImageSection
            heading={
              <FormattedMessage id={"ai.more.LeftImageSection.heading"} />
            } 
            subheading={
              <FormattedMessage id={"ai.more.LeftImageSection.subheading"} />
            } 
            text={
              <FormattedMessage id={"ai.more.LeftImageSection.text"} />
            } 
            image={david}
          />
          <Projects />
          <CallToAction />
          <FirstImpression
            heading={
              <FormattedMessage id={"ai.first_impression.FirstImpression.heading"} />
            } 
            subheading={
              <FormattedMessage id={"ai.first_impression.FirstImpression.subheading"} />
            } 
            firstHeading={
              <FormattedMessage id={"ai.first_impression.FirstImpression.firstHeading"} />
            } 
            firstImage={robot}
            firstText={
              <FormattedMessage id={"ai.first_impression.FirstImpression.firstText"} />
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

export default ai
