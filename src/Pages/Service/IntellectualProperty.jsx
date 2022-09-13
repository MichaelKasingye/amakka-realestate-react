import React from "react";
import ServiceHero from "../../Components/Services/ServiceHero";
import BodyTitle from "../../Components/BodyTitle";
import {
  ServiceBodyOrdinary,
  ServiceBodyReverse,
} from "../../Components/Services/ServiceBody";
import TitleHeader from "../../Components/TitleHeader/Index";

export default function intellectualProperty() {
  const HeroList = [
    "Company formation",
    "Website & Marketing Packages",
    "Business Finance",
    "Business & Strategic Plans",
  ];
  // eslint-disable-next-line
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
      description: "",
      list: [],
    },
  ];
  return( 
  <div className="mt-5">
      <TitleHeader title="Solfix Africa-Intellectual-Property" />

      <ServiceHero
        title="SOLFIX the solution to protect you Intellectual Property"
        description="Every business owner should familiarize with the four types of Intellectual property."
        image="../assets/img/pages/ideas.svg" 
        alt="A visual of a man thinking"
        list={HeroList}
      />
      <BodyTitle title="Offers" CSS="m-4" />

      <ServiceBodyOrdinary
        title="Copyrights"
        description="Copyright is a protection provided by the Law to authors and creators of original work. Copyrights protect writing, pictures, music, art, computer programmes & applications and other forms of Intellectual Property."
        collapseContent={collapseContentDataNone}
        path="https://dashboard.solfixafrica.com/register"
        image="../assets/img/pages/author.svg"
        alt="lady showing a chart"
      />
      <ServiceBodyReverse
        title="Trademarks"
        description="  A trademark is a word, phrase, symbol, or design or combination thereof that identifies and distinguishes the
         source of the good of one party from those of others."
         collapseContent = {collapseContentDataNone}
        path="https://dashboard.solfixafrica.com/register"
        image="../assets/img/pages/mark.svg" 
        alt="lady showing a chart"
      />

      <ServiceBodyOrdinary
        title="Patents"
        description="A patent for an invention is the grant of a property right to the inventor. A person who; invents or discovers any new and useful process, manufacture or composition of matter or any new and useful 
        improvement thereof may obtain a patent."
        path="https://dashboard.solfixafrica.com/register"
        collapseContent = {collapseContentDataNone}
        alt="Illustration of a person next to a chart"
        image="../assets/img/pages/create.svg"
      />
      <ServiceBodyReverse
        title="Trade Secrets"
        description=" A trade secret is any piece of confidential corporate information which gives any business a competitive advantage. 
        Protection of trade secrets is essential to protecting your company."
        path="https://dashboard.solfixafrica.com/register"
        alt="lady showing a chart"
        image="../assets/img/pages/trade.svg" 
      />
    </div>);
}
