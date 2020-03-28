import React, { Component } from "react"
import Navbar from "../components/Navbar"
import ApplicationHero from "../components/ApplicationHero"
import ChooseCity from "../components/ChooseCity"
import Requirements from "../components/Requirements"
import applicationHero from "../assets/application.png"
import ApplicationProcess from "../components/ApplicationProcess"
import CallToActionApplication from "../components/CallToActionApplication"
import Faq from "../components/Faq"
import FaqQuestion from "../components/FaqQuestion"
import Footer from "../components/Footer"
import AI from "../assets/ai-robot.png"
import Web from "../assets/webdevpro.png"
import Ds from "../assets/dashboard.png"
import LearnMore from "../components/LearnMore"
import UX from "../assets/UX.png"
import { ApplicationLinkEnum, getLink } from "../enums/ApplicationLinkEnum"
import { CityCountryEnum, CountryEnum } from "../enums/CountryEnum.js"
import { FormattedMessage } from "gatsby-plugin-intl"
import { Link } from "gatsby"

class apply extends Component {
  state = {
    isClicked: false,
    cityValue: "",
    open: false,
    link: "",
  }

  render() {
    const { isClicked } = this.state
    return (
      <>
        <Navbar />
        <ApplicationHero
          background={applicationHero}
          headingFirst={
            <FormattedMessage id={"applypage.headline.ApplicationHero.headingFirst"} />
          }
          intro={
            <FormattedMessage id={"applypage.headline.ApplicationHero.intro"} />
          }
        />
        <ChooseCity
          heading={<FormattedMessage id={"applypage.choose.your.city.title"} />}
          subheading={
            <FormattedMessage id={"applypage.choose.your.city.subtitle"} />
          }
          handleClick={(isClicked, value, open) => {
            this.setState({
              isClicked,
              cityValue: value,
              open,
              link: getLink(value),
            })
          }}
          clickedCityValue={this.state.cityValue}
        />
        <div className={isClicked ? "d-block" : "d-none"}>
          <Requirements
            heading={
              <FormattedMessage id={"applypage.requirements.heading"} />
            }
            subheading={
              <FormattedMessage id={"applypage.requirements.subheading"} />
            }
            link={this.state.link}
            isOpen={this.state.open}
          />
          <ApplicationProcess
            heading={
              <FormattedMessage id={"applypage.applicationProcess.heading"} />
            }
            subheading={
              <FormattedMessage id={"applypage.applicationProcess.subheading"} />
            }
          />
          <div className="container">
            <CallToActionApplication isOpen={true} link={this.state.link} />
            <LearnMore
              heading={
                <FormattedMessage id={"applypage.moreinformation.heading"} />
              }
              subheading={
                <FormattedMessage id={"applypage.moreinformation.subheading"} />
              }
              firstProjectHeading="Web Development"
              firstProjectImage={Web}
              firstLink="https://app.edyoucated.org/login"
              firstButtonText={
                <FormattedMessage id={"applypage.text.start_now"} />
              }
              secondProjectHeading="Data Science"
              secondProjectImage={Ds}
              secondLink="https://app.edyoucated.org/login"
              secondButtonText={
                <FormattedMessage id={"applypage.text.start_now"} />
              }
              thirdProjectHeading="Artificial Intelligence"
              thirdProjectImage={AI}
              thirdLink="https://app.edyoucated.org/login"
              thirdButtonText={
                <FormattedMessage id={"applypage.text.start_now"} />
              }
              fourthProjectHeading="User Experience Design"
              fourthProjectImage={UX}
              fourthLink="https://app.edyoucated.org/login"
              fourthButtonText={
                <FormattedMessage id={"applypage.text.start_now"} />
              }
              externalLink={true}
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
        </div>
        <Footer />
      </>
    )
  }
}

export default apply
