import React, { Component } from "react"

// plugins & external
import localeData from "../../intl"
import { FormattedMessage } from "gatsby-plugin-intl"
import dayjs from "dayjs"
import Img from "gatsby-image"

// components
import Heading from "../smallComponents/Heading"
import Dropdown from "../shared/dropdown"
import ApplicationCountdown from "../applyPage/ApplicationCountdown"

// style 
import "../../styles/landingpage/_applicationPeriod.scss"

import {
  CityCountryEnum,
  CountryEnum,
  getCity,
} from "../../enums/CountryEnum.js"

// functions
import { getLogo } from "../../enums/LogoEnum"
import { getCityValues } from "../../enums/CountryEnum"


class ApplicationPeriod extends Component {
  messages = localeData[this.props.locale]
  state = {
    country: null,
    city: null,
    cityOptions: [
      {
        label: this.messages[CityCountryEnum.CITY[0].value],
        value: CityCountryEnum.CITY[0].value,
      },
    ],
  }

  formatDate(date) {
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear()

    if (month.length < 2) month = "0" + month
    if (day.length < 2) day = "0" + day

    return [year, month, day].join(".")
  }

  getValues = city => {
    const tmpArray = this.props.locationData.filter(location => {
      return location.node.heading.toLowerCase() === city.split(".")[1]
    })

    return tmpArray.length > 0 ? tmpArray[0].node : getCityValues(city)
  }

  render() {
    const wave_style = {
      width: "100%",
      zIndex: "-1",
    }

    const dropdown_style = {
      marginBottom: "1em",
      width: "70%",
    }

    const countryOptions = [
      { value: CountryEnum.COUNTRY, label: this.messages[CountryEnum.COUNTRY] },
      { value: CountryEnum.GERMANY, label: this.messages[CountryEnum.GERMANY] },
      { value: CountryEnum.SPAIN, label: this.messages[CountryEnum.SPAIN] },
      { value: CountryEnum.DENMARK, label: this.messages[CountryEnum.DENMARK] },
      {
        value: CountryEnum.COLOMBIA,
        label: this.messages[CountryEnum.COLOMBIA],
      },
      { value: CountryEnum.BRAZIL, label: this.messages[CountryEnum.BRAZIL] },
      { value: CountryEnum.REMOTE, label: this.messages[CountryEnum.REMOTE] },
    ]

    const countryKey = "country"
    const cityKey = "city"
    let cityValues
    let open
    let date
    let available = true
    let now = dayjs(Date.now())

    if (this.state.city !== null) {
      cityValues = this.getValues(this.state.city)
      if (!cityValues || cityValues.applicationStart === null) {
        available = false
      } else {
        open = now.isAfter(dayjs(cityValues.applicationStart))
        if (open) {
          date = cityValues.applicationEnd
          if (now.isAfter(dayjs(cityValues.applicationEnd))) {
            available = false
          }
        } else {
          date = cityValues.applicationStart
          available = true
        }
      }
    }

    return (
      <section className="py-5 my-5">
        <div className="container">
          <Heading
            heading={
              <FormattedMessage
                id={"app.landingpage.applicationperiod.header"}
              />
            }
            subheading={
              <FormattedMessage
                id={"app.landingpage.applicationperiod.subheader"}
              />
            }
          />
          <div className="wave-box">
            <div className="row">
              <div className="d-flex col-lg-9 flex-wrap">
                <div className="p-2 col-sm-4 mt-5">
                  <Dropdown
                    options={countryOptions}
                    id={countryKey}
                    style={dropdown_style}
                    onSelect={this.handleCountryChange}
                  />
                  <Dropdown
                    options={this.state.cityOptions}
                    id={cityKey}
                    style={dropdown_style}
                    onSelect={this.handleCityChange}
                  />
                  <button className="btn btn-primary d-inline">
                    <FormattedMessage
                      id={"app.landingpage.applicationperiod.check"}
                    />
                  </button>
                </div>
                <div
                  className={
                    "p-2 col-sm-8 mt-5 " +
                    (this.state.cityOptions[0].value !==
                    CityCountryEnum.CITY[0].value
                      ? "show"
                      : "hidden")
                  }
                >
                  <div className="card h-100 center no-padding">
                    <h1 className="card-title-black">
                      {this.messages[this.state.city]}{" "}
                      {getLogo(this.state.city) && (
                        <img
                          src={getLogo(this.state.city)}
                          className="nav-loc-icon"
                          alt="loc-ms"
                        />
                      )}
                    </h1>{" "}
                    <br />
                    {available ? (
                      <>
                        {" "}
                        {open ? (
                          <p className="card-subtitle-grey">
                            <FormattedMessage
                              id={
                                "app.landingpage.applicationperiod.deadline.end"
                              }
                            />
                          </p>
                        ) : (
                          <p className="card-subtitle-grey">
                            <FormattedMessage
                              id={
                                "app.landingpage.applicationperiod.deadline.start"
                              }
                            />
                          </p>
                        )}
                        <div className="text-muted">
                          <ApplicationCountdown date={date} />
                        </div>
                        <span className="card-discover">
                          {open ? (
                            <a
                              className="btn btn-primary d-inline apply-button"
                              type="submit"
                              href={cityValues.applicationLink}
                            >
                              <FormattedMessage
                                id={
                                  "app.landingpage.applicationperiod.deadline.apply"
                                }
                              />
                            </a>
                          ) : (
                            <> </>
                          )}
                        </span>
                      </>
                    ) : (
                      <div className="card-padding">
                        <p className="card-subtitle-grey">
                          <FormattedMessage
                            id={"app.landingpage.applicationperiod.no.deadline"}
                          />
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="images">
          <Img fluid={this.props.wave} style={wave_style} alt="wave" />
        </div>
      </section>
    )
  }

  handleCountryChange = country => {
    this.setState({ country: country })
    this.setCity(country)
  }
  handleCityChange = city => {
    this.setState({ city: city })
  }

  setCity = country => {
    const values = []
    const cities = getCity(country)
    if (cities) {
      cities.forEach(value => {
        values.push({ value: value.value, label: this.messages[value.value] })
      })
    }
    this.setState({ cityOptions: values, city: values[0].value })
  }
}

export default ApplicationPeriod
