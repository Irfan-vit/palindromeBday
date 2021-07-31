import React, { useState } from "react";
import "./styles.css";
import shake from "./shake.gif";
import work from "./work.gif";
import comon from "./comon.gif";
import happy from "./postive.gif";
import sad from "./negative.gif";
import zebra from "./50933.jpg";
import zebra2 from "./Leopard_skin_texture.jpg";
import zebra3 from "./purple.jpg";
import zebra4 from "./216.jpg";

const happyImgDiv = (
  <img alt="happyImage" src={happy} width="200px" height="200px" />
);
const sadImgImgDiv = (
  <img alt="happyImage" src={sad} width="200px" height="200px" />
);
const workImgImgDiv = (
  <img alt="happyImage" src={shake} width="200px" height="200px" />
);
const shakeImgDiv = (
  <img alt="happyImage" src={work} width="200px" height="200px" />
);
var types = [
  "YYYY/MM/DD",
  "DD/MM/YYYY",
  "MM/DD/YY",
  "DD/MM/YY",
  "(Non 0 prefix MM)/DD/YYYY",
  "DD/(Non 0 prefix MM)/YYYY",
  "(Non 0 prefix DD)/(Non 0 prefix MM)/YYYY",
  "(Non 0 prefix DD)/MM/YYYY",
  "MM/(Non 0 prefix DD)/YYYY",
  "(Non 0 prefix DD)/(Non 0 prefix MM)/YY",
  "(Non 0 prefix MM)/DD/YY",
  "DD/(Non 0 prefix MM)/YY",
  "(Non 0 prefix DD)/MM/YY",
  "MM/(Non 0 prefix DD)/YY",
  "(0 prefixed YYYY)/MM/DD",
  "DD/MM/(0 prefixed YYYY)",
  "(Non 0 prefix MM)/DD/(0 prefixed YYYY)",
  "DD/(Non 0 prefix MM)/(0 prefixed YYYY)",
  "(Non 0 prefix DD)/(Non 0 prefix MM)/(0 prefixed YYYY)",
  "(Non 0 prefix DD)/MM/(0 prefixed YYYY)",
  "MM/(Non 0 prefix DD)/(0 prefixed YYYY)",
  "YYYY/DD/MM",
  "YY/MM/DD",
  "YY/DD/MM",
  "YYYY/(Non 0 prefix MM)/DD",
  "YYYY/DD/(Non 0 prefix MM)",
  "YYYY/(Non 0 prefix DD)/(Non 0 prefix MM)",
  "YYYY/(Non 0 prefix DD)/MM",
  "YYYY/MM/(Non 0 prefix DD)",
  "YY(Non 0 prefix DD)/(Non 0 prefix MM)",
  "YY/(Non 0 prefix MM)/DD",
  "YY/DD/(Non 0 prefix MM)",
  "YY/(Non 0 prefix DD)/MM",
  "YY/MM/(Non 0 prefix DD)",
  "(0 prefixed YYYY)/DD/MM",
  "(0 prefixed YYYY)/(Non 0 prefix MM)/DD",
  "(0 prefixed YYYY)/DD/(Non 0 prefix MM)",
  "(0 prefixed YYYY)/(Non 0 prefix DD)/(Non 0 prefix MM)",
  "(0 prefixed YYYY)/(Non 0 prefix DD)/MM",
  "(0 prefixed YYYY)/MM/(Non 0 prefix DD)"
];
export default function App() {
  var least = Number.MAX_SAFE_INTEGER;
  var formattedDate = new Array(40);
  var [palindrome, chkPalindrome] = useState(["Enter Your Birthday", ""]);
  var [date, setDate] = useState();
  // var [count, setCount] = useState(0);
  const addMissingZeros = (date) => (/^\d$/.test(date) ? `0${date}` : date);
  function padLeadingZeros() {
    var year = date.getFullYear();
    if (year < 1000) {
      var s = year + "";
      while (s.length < 4) s = "0" + s;
      return s;
    }
  }
  function inputDate(event) {
    var birthDate = new Date(event.target.value);
    date = birthDate;
    setDate(date);
  }
  function formatter(date, type, readable) {
    // var birthFullYear = padLeadingZeros(date.getFullYear());
    if (date.getFullYear() < 1000) {
      var birthYear = padLeadingZeros(date.getFullYear());
    } else {
      birthYear = date.getFullYear();
    }
    var birthFullYear = date.getFullYear();
    var birthMonth = addMissingZeros(date.getMonth() + 1);
    var birthDt = addMissingZeros(date.getDate());
    var birthMonth2 = date.getMonth() + 1;
    var birthDt2 = date.getDate();
    if (type === 1) {
      return readable
        ? `${birthFullYear}-${birthMonth}-${birthDt}`
        : `${birthFullYear}${birthMonth}${birthDt}`;
    } else if (type === 2) {
      return readable
        ? `${birthDt}-${birthMonth}-${birthFullYear}`
        : `${birthDt}${birthMonth}${birthFullYear}`;
    } else if (type === 3) {
      return readable
        ? `${birthMonth}-${birthDt}-${addMissingZeros(birthFullYear % 100)}`
        : `${birthMonth}${birthDt}${addMissingZeros(birthFullYear % 100)}`;
    } else if (type === 4) {
      return readable
        ? `${birthDt}-${birthMonth}-${addMissingZeros(birthFullYear % 100)}`
        : `${birthDt}${birthMonth}${addMissingZeros(birthFullYear % 100)}`;
    } else if (type === 5) {
      return readable
        ? `${birthMonth2}-${birthDt}-${birthFullYear}`
        : `${birthMonth2}${birthDt}${birthFullYear}`;
    } else if (type === 6) {
      return readable
        ? `${birthDt}-${birthMonth2}-${birthFullYear}`
        : `${birthDt}${birthMonth2}${birthFullYear}`;
    } else if (type === 7) {
      return readable
        ? `${birthDt2}-${birthMonth2}-${birthFullYear}`
        : `${birthDt2}${birthMonth2}${birthFullYear}`;
    } else if (type === 8) {
      return readable
        ? `${birthDt2}-${birthMonth}-${birthFullYear}`
        : `${birthDt2}${birthMonth}${birthFullYear}`;
    } else if (type === 9) {
      return readable
        ? `${birthMonth}-${birthDt2}-${birthFullYear}`
        : `${birthMonth}${birthDt2}${birthFullYear}`;
    } else if (type === 10) {
      return readable
        ? `${birthDt2}-${birthMonth2}-${addMissingZeros(birthFullYear % 100)}`
        : `${birthDt2}${birthMonth2}${addMissingZeros(birthFullYear % 100)}`;
    } else if (type === 11) {
      return readable
        ? `${birthMonth2}-${birthDt}-${addMissingZeros(birthFullYear % 100)}`
        : `${birthMonth2}${birthDt}${addMissingZeros(birthFullYear % 100)}`;
    } else if (type === 12) {
      return readable
        ? `${birthDt}-${birthMonth2}-${addMissingZeros(birthFullYear % 100)}`
        : `${birthDt}${birthMonth2}${addMissingZeros(birthFullYear % 100)}`;
    } else if (type === 13) {
      return readable
        ? `${birthDt2}-${birthMonth}-${addMissingZeros(birthFullYear % 100)}`
        : `${birthDt2}${birthMonth}${addMissingZeros(birthFullYear % 100)}`;
    } else if (type === 14) {
      return readable
        ? `${birthMonth}-${birthDt2}-${addMissingZeros(birthFullYear % 100)}`
        : `${birthMonth}${birthDt2}${addMissingZeros(birthFullYear % 100)}`;
    } else if (type === 15) {
      return readable
        ? `${birthYear}-${birthMonth}-${birthDt}`
        : `${birthYear}${birthMonth}${birthDt}`;
    } else if (type === 16) {
      return readable
        ? `${birthDt}-${birthMonth}-${birthYear}`
        : `${birthDt}${birthMonth}${birthYear}`;
    } else if (type === 17) {
      return readable
        ? `${birthMonth2}-${birthDt}-${birthYear}`
        : `${birthMonth2}${birthDt}${birthYear}`;
    } else if (type === 18) {
      return readable
        ? `${birthDt}-${birthMonth2}-${birthYear}`
        : `${birthDt}${birthMonth2}${birthYear}`;
    } else if (type === 19) {
      return readable
        ? `${birthDt2}-${birthMonth2}-${birthYear}`
        : `${birthDt2}${birthMonth2}${birthYear}`;
    } else if (type === 20) {
      return readable
        ? `${birthDt2}-${birthMonth}-${birthYear}`
        : `${birthDt2}${birthMonth}${birthYear}`;
    } else if (type === 21) {
      return readable
        ? `${birthMonth}-${birthDt2}-${birthYear}`
        : `${birthMonth}${birthDt2}${birthYear}`;
    } else if (type === 22) {
      return readable
        ? `${birthFullYear}-${birthDt}-${birthMonth}`
        : `${birthFullYear}${birthDt}${birthMonth}`;
    } else if (type === 23) {
      return readable
        ? `${addMissingZeros(birthFullYear % 100)}-${birthMonth}-${birthDt}`
        : `${addMissingZeros(birthFullYear % 100)}${birthMonth}${birthDt}`;
    } else if (type === 24) {
      return readable
        ? `${addMissingZeros(birthFullYear % 100)}-${birthDt}-${birthMonth}`
        : `${addMissingZeros(birthFullYear % 100)}${birthDt}${birthMonth}`;
    } else if (type === 25) {
      return readable
        ? `${birthFullYear}-${birthMonth2}-${birthDt}`
        : `${birthFullYear}${birthMonth2}${birthDt}`;
    } else if (type === 26) {
      return readable
        ? `${birthFullYear}-${birthDt}-${birthMonth2}`
        : `${birthFullYear}${birthDt}${birthMonth2}`;
    } else if (type === 27) {
      return readable
        ? `${birthFullYear}-${birthDt2}-${birthMonth2}`
        : `${birthFullYear}${birthDt2}${birthMonth2}`;
    } else if (type === 28) {
      return readable
        ? `${birthFullYear}-${birthDt2}-${birthMonth}`
        : `${birthFullYear}${birthDt2}${birthMonth}`;
    } else if (type === 29) {
      return readable
        ? `${birthFullYear}-${birthMonth}-${birthDt2}`
        : `${birthFullYear}${birthMonth}${birthDt2}`;
    } else if (type === 30) {
      return readable
        ? `${addMissingZeros(birthFullYear % 100)}-${birthDt2}-${birthMonth2}`
        : `${addMissingZeros(birthFullYear % 100)}${birthDt2}${birthMonth2}`;
    } else if (type === 31) {
      return readable
        ? `${addMissingZeros(birthFullYear % 100)}-${birthMonth2}-${birthDt}`
        : `${addMissingZeros(birthFullYear % 100)}${birthMonth2}${birthDt}`;
    } else if (type === 32) {
      return readable
        ? `${addMissingZeros(birthFullYear % 100)}${birthDt}-${birthMonth2}`
        : `${addMissingZeros(birthFullYear % 100)}${birthDt}${birthMonth2}`;
    } else if (type === 33) {
      return readable
        ? `${addMissingZeros(birthFullYear % 100)}${birthDt2}-${birthMonth}`
        : `${addMissingZeros(birthFullYear % 100)}${birthDt2}${birthMonth}`;
    } else if (type === 34) {
      return readable
        ? `${addMissingZeros(birthFullYear % 100)}-${birthMonth}-${birthDt2}`
        : `${addMissingZeros(birthFullYear % 100)}${birthMonth}${birthDt2}`;
    } else if (type === 35) {
      return readable
        ? `${birthYear}-${birthDt}-${birthMonth}`
        : `${birthYear}${birthDt}${birthMonth}`;
    } else if (type === 36) {
      return readable
        ? `${birthYear}-${birthMonth2}-${birthDt}`
        : `$${birthYear}{birthMonth2}${birthDt}`;
    } else if (type === 37) {
      return readable
        ? `${birthYear}-${birthDt}-${birthMonth2}`
        : `${birthYear}${birthDt}${birthMonth2}`;
    } else if (type === 38) {
      return readable
        ? `${birthYear}-${birthDt2}-${birthMonth2}`
        : `${birthYear}${birthDt2}${birthMonth2}`;
    } else if (type === 39) {
      return readable
        ? `${birthYear}-${birthDt2}-${birthMonth}`
        : `${birthYear}${birthDt2}${birthMonth}`;
    } else if (type === 40) {
      return readable
        ? `${birthYear}-${birthMonth}-${birthDt2}`
        : `${birthYear}${birthMonth}${birthDt2}`;
    }
  }
  function clickHandler() {
    if (date === undefined) {
      alert("enter date");
    } else if (date !== undefined) {
      tempo();
      chkPalindrome(["checking", shakeImgDiv]);
      setTimeout(() => {
        for (var a = 0; a < 40; a++) {
          formattedDate[a] = formatter(date, a + 1);
          if (
            formattedDate[a] === formattedDate[a].split("").reverse().join("")
          ) {
            formattedDate[a] = formatter(date, a + 1, true);
            console.log(formattedDate[a]);
            palindrome =
              "Hurray !!!  It is A Palindrome The Date And Format Are : " +
              formattedDate[a] +
              " ( " +
              types[a] +
              " ) ";
            chkPalindrome([palindrome, happyImgDiv]);
            return;
          } else if (
            a === 39 &&
            formattedDate[a] !== formattedDate[a].split("").reverse().join("")
          ) {
            getPalindromeDates(date);
          }
        }
      }, 3600);
    }
  }
  function tempo() {
    for (var a = 0; a < 40; a++) {
      formattedDate[a] = formatter(date, a + 1, true);
      console.log(formattedDate[a] + types[a]);
    }
  }

  function getPalindromeDates(date) {
    var givenYear = date.getFullYear() - 2;
    var givenMonth = addMissingZeros(date.getMonth() + 1);
    var givenDt = addMissingZeros(date.getDate());
    let daten = new Date(givenYear, givenMonth, givenDt);
    while (daten.getFullYear() < date.getFullYear() + 2) {
      for (var j = 0; j < 40; j++) {
        formattedDate[j] = formatter(daten, j + 1);
        if (
          formattedDate[j] === formattedDate[j].split("").reverse().join("")
        ) {
          var diff = Math.abs(
            Math.floor((date.getTime() - daten.getTime()) / (1000 * 3600 * 24))
          );
          if (diff < least && diff !== 0) {
            least = diff;
            palindrome =
              "Oops!! your birthday is not palindrome. Nearest palindrome date is '" +
              formatter(daten, j + 1, true) +
              "In the format : ( " +
              types[j] +
              " ) ' you missed it by  '" +
              Math.abs(Math.floor(least)) +
              "' days ";
            chkPalindrome([palindrome, sadImgImgDiv]);
          }
        }
      }
      daten = new Date(daten.setDate(daten.getDate() + 1));
    }
  }

  return (
    <div className="App">
      <header id="body-header">
        <nav>
          <ul className="horizontal-list text-center nav-menu">
            <li>
              <a href="#body-header">Home</a>
            </li>
            <li>
              <a href="#contact">Enter Date</a>
            </li>
            <li>
              <a href="#footer">Contact</a>
            </li>
          </ul>
        </nav>
        <div id="name-social-container">
          <div className="text-center">
            <h1
              style={{
                background: `url(${zebra})`,
                WebkitBackgroundClip: "text"
              }}
              id="my-name"
            >
              IS YOUR BIRTHDATE A PALINDROME ?
            </h1>
          </div>
          <div>
            <ul className="horizontal-list text-center icon-color">
              <li>
                <a href="https://www.linkedin.com/in/irfan-nawaz/">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/Irfan-vit">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://shaik-irfan.netlify.app/">
                  <i className="fas fa-user-circle"></i>
                  {/* <i class="fas fa-id-badge"></i> */}
                  {/* <i class="fas fa-user-astronaut"></i> */}
                </a>
              </li>
              <li style={{ display: "block", padding: "20px" }}>
                <a href="#contact">
                  <i className="fas fa-chevron-down text-center"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <main>
        <section id="about">
          <div id="hero-img">
            <a href="#contact">
              <img src={comon} />
            </a>
          </div>
          <article className="info text-center"></article>
        </section>

        <section id="contact">
          <div className="title">
            <section className="hero">
              <div
                className="text-section"
                style={{ backgroundImage: `url(${zebra3})` }}
              >
                <h1
                  style={{
                    background: `url(${zebra2})`,
                    WebkitBackgroundClip: "text"
                  }}
                  id="my-name"
                >
                  Check out if your <span>Birthdate</span> is{" "}
                  <span>Palidrome</span>.
                </h1>
                <p style={{ color: "black" }}>
                  A palindrome is a word/number which reads the same backward as
                  forward
                </p>
                <a href="#footer">
                  <i
                    className="fas fa-chevron-down text-center"
                    style={{
                      fontSize: "2rem",
                      color: "rgb(145,156,238,0.7)"
                    }}
                  ></i>
                </a>
              </div>
            </section>
          </div>

          <div>
            <section id="mainSection" style={{ backgroundImage: "" }}>
              <h2
                style={{
                  background: `url(${zebra3})`,
                  WebkitBackgroundClip: "text"
                }}
                id="second-name"
              >
                Enter your birthdate and we will tell you if your birthdate is a
                palindrome
              </h2>
              <p style={{ fontSize: "1rem" }}>
                This app checks your birthdate in Various formats <br /> e.g. if
                the entered is "08 Jan 0201", then app will check for
                <br /> 201-01-08(YYYY/MM/DD),
                <br /> 0201-08-01((0 prefixed YYYY)/DD/MM),
                <br /> 0201-8-1((0 prefixed YYYY)/(Non 0 prefix DD)/(Non 0
                prefix MM)) <br />
                201-8-01(YYYY/(Non 0 prefix DD)/MM),....
                <br />
                And So On In Many more Combinations.
              </p>
              <input
                type="date"
                onChange={inputDate}
                id="datePicker"
                max="9999-12-31"
                required
              />
              <button onClick={clickHandler} className="linkPrimary">
                check
              </button>
              <div className="output">
                <h1>{palindrome[0]}</h1>
                <div>{palindrome[1]}</div>
              </div>
            </section>
          </div>

          <div className="contact-content">
            <div className="contact-block" id="footer">
              <div>
                <h1 className="text-center">Get In Touch</h1>
              </div>
              <div>
                <div
                  id="footer-img"
                  style={{
                    textAlign: "center",
                    margin: "auto",
                    backgroundImage: `url(${zebra4})`
                  }}
                >
                  {workImgImgDiv}
                </div>
              </div>
              <div className="text-center" style={{ display: "inline-block" }}>
                <h1 style={{ display: "inline-block" }}>Contact Information</h1>
              </div>
              <div id="my-info">
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <span>Hyderabad, India</span>
              </div>
              <div id="my-info">
                <span>
                  <i className="fas fa-envelope"></i>
                </span>
                <span
                  style={{
                    wordBreak: "break-all"
                  }}
                >
                  irfannawaz@tempmail
                </span>
              </div>
              <div id="my-info">
                <span>
                  <i className="fab fa-discord"></i>
                </span>
                <span>irfan_nawaz#xyz</span>
              </div>
              <div className="text-center">
                <a href="#body-header">
                  <i
                    style={{
                      fontSize: "2rem",
                      display: "inline-block",
                      cursor: "pointer"
                    }}
                    className="fas fa-chevron-up"
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
