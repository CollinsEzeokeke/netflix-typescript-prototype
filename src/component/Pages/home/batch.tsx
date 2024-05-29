import React, { useState } from "react";
import "../../MYCSS/batch.css";
import { Plus, X } from "lucide-react";
import Mobile from "../../images/mobile-0819.jpg";
import Kids from "../../images/download.png";
import VideoPlayer from "../VideoPlayer";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is Netflix",
    answer: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
  
      You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`,
  },
  {
    question: "How much does Netflix cost?",
    answer: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦1,600 to ₦5,000 a month. No extra costs, no contracts.`,
  },
  {
    question: "Where can I watch?",
    answer: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
  
      You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
  },
  {
    question: "How do I cancel",
    answer: `Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
  },
  {
    question: "What can I watch on Netflix?",
    answer: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
  },
  {
    question: "Is Netflix good for kids?",
    answer: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
  
      Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
  },
];

const Batch: React.FC = () => {
  const [clickedIndex, setClickedIndex] = useState(0);
  const clicked = (index: number) => {
    if (index === clickedIndex) {
      setClickedIndex(0);
      console.log(clickedIndex);
    }
    if (index !== clickedIndex) {
      setClickedIndex(index);
      console.log(clickedIndex);
    }
  };
  return (
    <div>
      <div className="content">
        <div className="tvHolder">
          <div className="side-tv">
            <h1>Enjoy your TV.</h1>
            <div className="toCenter">
            <h3>
              Watch on smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more
            </h3>
            </div>
          </div>
          <div className="tv">
            <VideoPlayer src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" />
          </div>
        </div>
      </div>

      <div className="content2">
        <div>
          <img src={Mobile} alt="Mobile" />
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100px",
              justifyContent: "center",
              marginTop: "-10%",
            }}
          >
            <div className="image">
              <h3>Stranger things</h3>
            </div>
          </div>
        </div>

        <div style={{ marginLeft: "30px" }}>
          <h1 style={{ fontSize: "50px" }}>
            Download your shows to watch offline.
          </h1>
          <h3>
            Save your favourites easily and always have something to watch.
          </h3>
        </div>
      </div>

      <div className="content3">
        <div>
          <h1>Watch everywhere.</h1>
          <h3>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </h3>
        </div>
      </div>

      <div className="content2">
        <div>
          <img src={Kids} alt="Kids" />
        </div>

        <div style={{ marginRight: "10px" }}>
          <h1 style={{ fontSize: "50px" }}>Create profiles for kids.</h1>
          <h3 className="folly">
            Send kids on adventures with their favourite characters in a space
            made just for them--- free with your membership.
          </h3>
        </div>
      </div>

      <div className="new">
        <h1>Frequently Asked Questions</h1>
        {faqs.map((value, index) => {
          const usedIndex = index + 1;
          return (
            <React.Fragment key={index + 1}>
              <div
                className="card"
                style={{ marginTop: "15px" }}
                onClick={() => clicked(usedIndex)}
              >
                <a href="#">{value.question}</a>{" "}
                {clickedIndex !== usedIndex ? (
                  <Plus size={28} strokeWidth={3} />
                ) : (
                  <X size={28} strokeWidth={3} />
                )}
              </div>
              {clickedIndex === usedIndex && <div>{value.answer}</div>}
            </React.Fragment>
          );
        })}
        <p style={{ marginTop: "100px" }}>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="line">
          <input type="email" placeholder="Email Address" />{" "}
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Batch;
