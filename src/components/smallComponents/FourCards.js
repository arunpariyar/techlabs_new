import React from "react"

const SingleCard = ({ headingText, imgSource }) => {
  const imgStyle = { width: 125, height: "auto" }

  return (
    <div className="col-6 col-lg-3 my-4">
      <div className="card h-100">
        <h4 className="color-black font-weight-bold mx-auto">{headingText}</h4>
        <img src={imgSource} className="mx-auto my-auto" style={imgStyle} />
      </div>
    </div>
  )
}

const FourCards = ({
  headingOne,
  headingTwo,
  headingThree,
  headingFour,
  imgOne,
  imgTwo,
  imgThree,
  imgFour,
}) => {
  return (
    <>
      <div className="row">
        <SingleCard headingText={headingOne} imgSource={imgOne} />
        <SingleCard headingText={headingTwo} imgSource={imgTwo} />
        <SingleCard headingText={headingThree} imgSource={imgThree} />
        <SingleCard headingText={headingFour} imgSource={imgFour} />
      </div>
    </>
  )
}

export default FourCards
