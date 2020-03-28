import React, { Component } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Info from '../assets/pdf/Mentor.pdf';
import Dates from '../assets/pdf/MentoringDates.pdf';
import {FormattedMessage} from "gatsby-plugin-intl"


class mentors extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container my-5 py-5 h-100">
          <div className="row">
            <div className="col">
              <h2>{
                  <FormattedMessage id={"mentors.information.text"} />
                }   
                </h2>
            </div>
          </div>
          <div className="row my-5">
            <div className="col">
              <a className="btn btn-primary mt-4" href={Info}>Download Info</a>
              <a className="btn btn-primary mt-4" href={Dates}>Download Calendar</a>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default mentors
