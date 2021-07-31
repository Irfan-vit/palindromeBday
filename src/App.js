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
export default function App() {
  var least = Number.MAX_SAFE_INTEGER;
  var formattedDate = new Array(6);
  var [palindrome, chkPalindrome] = useState(["Enter Your Birthday", ""]);
  var [date, setDate] = useState();
  const addMissingZeros = (date) => (/^\d$/.test(date) ? `0${date}` : date);
  function inputDate(event) {
    var birthDate = new Date(event.target.value);
    date = birthDate;
    setDate(date);
  }
  function formatter(date, type, readable) {
    var birthYear = date.getFullYear();
    var birthMonth = addMissingZeros(date.getMonth() + 1);
    var birthDt = addMissingZeros(date.getDate());
    var birthMonth2 = date.getMonth() + 1;
    if (type === 1) {
      return readable
        ? `${birthMonth}-${birthDt}-${birthYear}`
        : `${birthYear}${birthMonth}${birthDt}`;
    } else if (type === 2) {
      return readable
        ? `${birthDt}-${birthMonth}-${birthYear}`
        : `${birthDt}${birthMonth}${birthYear}`;
    } else if (type === 3) {
      return readable
        ? `${birthMonth}-${birthDt}-${addMissingZeros(birthYear % 100)}`
        : `${birthMonth}${birthDt}${addMissingZeros(birthYear % 100)}`;
    } else if (type === 4) {
      return readable
        ? `${birthDt}-${birthMonth}-${addMissingZeros(birthYear % 100)}`
        : `${birthDt}${birthMonth}${addMissingZeros(birthYear % 100)}`;
    } else if (type === 5) {
      return readable
        ? `${birthMonth2}-${birthDt}-${birthYear}`
        : `${birthMonth2}${birthDt}${birthYear}`;
    } else if (type === 6) {
      return readable
        ? `${birthDt}-${birthMonth2}-${birthYear}`
        : `${birthDt}${birthMonth2}${birthYear}`;
    }
  }
  function clickHandler() {
    if (date === undefined) {
      alert("enter date");
    } else if (date !== undefined) {
      chkPalindrome(["checking", shakeImgDiv]);
      setTimeout(() => {
        for (var a = 0; a < 6; a++) {
          formattedDate[a] = formatter(date, a + 1);
          console.log(formattedDate[a]);
          if (
            formattedDate[a] === formattedDate[a].split("").reverse().join("")
          ) {
            formattedDate[a] = formatter(date, a + 1, true);
            palindrome = "Yes a palindrome" + formattedDate[a] + a;
            chkPalindrome([palindrome, happyImgDiv]);
          } else if (
            formattedDate[a] !== formattedDate[a].split("").reverse().join("")
          ) {
            getPalindromeDates(date);
          }
        }
      }, 3600);
    }
  }

  function getPalindromeDates(date, palindromesToShow = 9) {
    var givenYear = date.getFullYear() - 1;
    var givenMonth = addMissingZeros(date.getMonth() + 1);
    var givenDt = addMissingZeros(date.getDate());
    let daten = new Date(givenYear, givenMonth, givenDt);
    for (
      let i = 0;
      i < palindromesToShow;
      daten = new Date(daten.setDate(daten.getDate() + 1))
    ) {
      for (var j = 0; j < 6; j++) {
        formattedDate[j] = formatter(daten, j + 1);
        if (
          formattedDate[j] === formattedDate[j].split("").reverse().join("")
        ) {
          i++;
          var diff = Math.abs(
            Math.floor((date.getTime() - daten.getTime()) / (1000 * 3600 * 24))
          );
          if (diff < least && diff !== 0) {
            least = diff;
            palindrome =
              "Oops!! your birthday is not palindrome. Nearest palindrome date is '" +
              formatter(daten, j + 1, true) +
              "' you missed it by  '" +
              Math.abs(Math.floor(diff)) +
              "' days ";
            chkPalindrome([palindrome, sadImgImgDiv]);
          }
        }
      }
    }
  }

  return (
    <div className="App">
      <header id="body-header">
        <nav>
          <ul class="horizontal-list text-center nav-menu">
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
          <div class="text-center">
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
            <ul class="horizontal-list text-center icon-color">
              <li>
                <a href="#">
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-github-square"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li style={{ display: "block", padding: "20px" }}>
                <a href="#contact">
                  <i class="text-center" class="fas fa-chevron-down"></i>
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
          <article class="info text-center">
            {/* <h1>Come On !!!</h1> */}
          </article>
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
                This app checks your birthdate in 4 formats{" "}
                <i>yyyy-mm-dd, dd-mm-yyyy, mm-dd-yy, m-dd-yyyy</i>
                <br /> e.g. if your birthdate is 01 Aug 1995, then app will
                check for 19950801, 01081995, 080195, 1081995
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

          <div class="contact-content">
            <div class="contact-block" id="footer">
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
                  {/* <img src="media/location.svg" width="30px" height="30px" /> */}
                  <i class="fas fa-map-marker-alt"></i>
                </span>
                <span>Hyderabad, India</span>
              </div>
              <div id="my-info">
                <span>
                  {/* <img src="media/gmail.svg" width="30px" height="30px" /> */}
                  <i class="fas fa-envelope"></i>
                </span>
                <span
                  style={{
                    wordBreak: "break-all"
                  }}
                >
                  shaikmd.irfannawaz2020@gmail.com
                </span>
              </div>
              <div id="my-info">
                <span>
                  {/* <img src="media/call.svg" width="30px" height="30px" /> */}
                  <i class="fab fa-discord"></i>
                </span>
                <span>irfan_nawaz#6777</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
