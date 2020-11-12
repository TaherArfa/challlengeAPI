import React from "react";

function AboutUs() {
  return (
    <div style={{
        display: "flex",
        FlexWrap:"wrap"
    }}>
      <img style={{margin:"25px",borderRadius:"10px"}}
        src="https://i.pinimg.com/originals/fd/e6/6a/fde66a99c830896e4a376a08dbee033b.jpg"
        alt="bar"
      />
      <div className="aboutusText">
        <h1>Welcome to ower juice Bar</h1>
        <p>
             At JuiceBar Plant-Based Health, our mission is to touch one life at a time by inspiring, motivating, and educating customers on plant-based nutrition. We strive to strengthen your daily mental and physical productivity through proper nutrition, hydration, and detoxification of body systems. 
<br/>
<br/>
We aspires to improve the health of the community by increasing access to healthier nutritional options. JuiceBar Plant-Based Health is a 100% all-natural juice bar, providing cold pressed juice, detoxes, wellness shots, alkaline water, and smoothies to name a few. The juices are made from raw fruits and vegetables, no preservatives or additives, and cold pressed to maximize its nutritional benefits. We value high quality, great tasting, and fresh juices, so there is no pasteurization applied to our products. We have a variety of smoothie options, made from all-natural ingredients and are a great choice for meal replacements. Our juice detoxes are 100% natural and are infused with alkaline water to support detoxification of body systems.
<br/>
<br/>
“Our goal is to transcend the notion of plant-based nutrition to the community by providing healthy choices for both adults and kids. The prevalence of chronic disease continues to rise in our communities and our goal is to counter that trend with increased access to micronutrients geared towards prevention of chronic disease” . Come on by to see JuiceBar PBH for a great experience! We are here to serve!        </p>
      </div>
    </div>
  );
}

export default AboutUs;
