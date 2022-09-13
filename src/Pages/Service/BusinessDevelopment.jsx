import React from "react";
import ServiceHero from "../../Components/Services/ServiceHero";
import BodyTitle from "../../Components/BodyTitle";
import CollapseComponents from "../../Components/CollapseComponents"
import {
  ServiceBodyOrdinary,
  ServiceBodyReverse,
} from "../../Components/Services/ServiceBody";
import TitleHeader from "../../Components/TitleHeader/Index";



export default function BusinessDevelopment() {
  const HeroList = [
    "Company formation",
    "Website & Marketing Packages",
    "Business Finance",
    "Business & Strategic Plans",
  ];
  const collapseContentData = [
    {
      title: "Registration",
      description:
        "We handle all the paperwork and register your company in a matter of days. Thanks to our easy and simple process.",
      list: [],
    },
    {
      title: "Documents",
      description:
        "We organize for you a folder of documents that are essential for a new company operating;",
      list: [
        "Share Certificates",
        "Register Book Packages",
        "Shareholder Agreements",
        "Board Resolutions",
      ],
    },
    {
      title: "Open a Bank Account ",
      description:
        "We provide bank advisory services to our customers and get assisted in opening up a bank account.",
      list: [],
    },
    {
      title: "TIN Registration",
      description: "We prepare and file your application easy and fast.",
      list: [],
    },
  ];
  const collapseContentDataNone = [
    {
      title: "",
      description:
        "",
      list: [],
    },

  ];
  return (
    <div className="mt-5">
      <TitleHeader title="Solfix Africa-Business-Development" />

      <ServiceHero
        title="Business development made easy for your company"
        description="Sofix provides on demand services for business prosperity."
        image="../assets/img/pages/business-dev.svg"
        list={HeroList}
      />
      <BodyTitle title="Offers" CSS="m-4" />

      <ServiceBodyOrdinary
        title="Company Formation"
        description="We enable you open your company with the required necessities to have it legitimate, recognizable and ready for business."
        collapseContent={collapseContentData}
        path="https://dashboard.solfixafrica.com/register"
        image="../assets/img/pages/document1.svg"
      />
      <ServiceBodyReverse
        title="Website &amp; Marketing Packages"
        description=" You have access to choose from various marketing packages that
       fit your company and budget and enjoy working with reliable
       professional website designers."
         collapseContent = {collapseContentDataNone}
        path="https://dashboard.solfixafrica.com/register"
        image="../assets/img/pages/websiteBuild.svg"
      />

      <ServiceBodyOrdinary
        title="Business Finance"
        description="You can have access to funds and credit packages from our partners.
        We help you prepare documentation to access financial opportunities."
        path="https://dashboard.solfixafrica.com/register"
        collapseContent = {collapseContentDataNone}

        image="../assets/img/pages/finance.svg"
      />
      <ServiceBodyReverse
        title="Business & Strategic Plans"
        description=" You have access to choose from various marketing packages that fit 
        your company and budget and enjoy working with reliable professional website designers."
        path="https://dashboard.solfixafrica.com/register"
        image="../assets/img/pages/plan.svg"
      />

<CollapseComponents/>
    </div>
  );
}
