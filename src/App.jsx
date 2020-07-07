/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import madeWithBulma from 'assets/made-with-bulma.png';
import Speaker from './components/Speaker';
import InfoCard from './components/InfoCard';
import speakerContext from './context/speaker';
import 'App.scss';

function Title({ children }) {
  return (
    <h1 className="title has-text-centered">
      <span className="px-5 title-border">{children}</span>
    </h1>
  );
}

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
};

function App() {
  return (
    <div className="App">
      {/* Hero title */}
      <section className="hero is-bold has-text-centered banner">
        <div className="hero-body">
          <div className="py-5 border-box">
            <div className="title is-size-1">讀書分享會</div>
            <div className="subtitle">多一點時間，聆聽一本好書</div>
          </div>
        </div>
      </section>
      {/* Venue */}
      <section className="section">
        <div className="container">
          <Title>基本資訊</Title>
          <div className="columns">
            <InfoCard title="參與前">
              <ul>
                <li>
                  時間：2020/9 20:30-21:30 PM
                  <span className="tag is-danger mx-1">未定</span>
                </li>
                <li>類型：線上讀書會</li>
                <li>
                  工具：開場前十分鐘發送會議代碼，聽眾自行登入
                  <a href="https://meet.google.com/"> Google Meet </a>
                  。
                </li>
              </ul>
            </InfoCard>
            <InfoCard title="參與中">
              <ul>
                <li>不發出其他聲響干擾演講者，如播音樂。</li>
                <li>中途離席不需告知。</li>
                <li>
                  對每位講者至少
                  <span className="tag is-warning is-light is-medium px-0">提出一個問題</span>
                  或是自身
                  <span className="tag is-warning is-light is-medium px-0">經驗分享</span>
                  。
                </li>
              </ul>
            </InfoCard>
            <InfoCard title="參與後">
              <ul>
                <li>
                  填寫
                  <span className="tag is-warning is-light is-medium px-0">回饋表單</span>
                  ，感謝參與。
                </li>
                <li>表單連結將在讀書會結束後發送。</li>
                <li>報名下次讀書分享會請洽 Niko。</li>
              </ul>
            </InfoCard>
          </div>
        </div>
      </section>
      {/* Speaker */}
      <section className="hero is-medium is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <Title>講者</Title>
            <div className="columns is-desktop">
              {speakerContext.map((props, i) => (
                <div className="column" key={`speaker${i.toString()}`}>
                  <Speaker {...props} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Agenda */}
      <section className="section">
        <div className="container">
          <Title>議程</Title>
          <table className="table" style={{ width: '100%' }}>
            <thead>
              <tr>
                <th>時間</th>
                <th>活動</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>20:20</td>
                <td>發送 Google Meet 會議代碼</td>
              </tr>
              <tr>
                <td>20:30-20:50</td>
                <td>第一位講者</td>
              </tr>
              <tr>
                <td>20:50-21:00</td>
                <td>討論時間</td>
              </tr>
              <tr>
                <td>21:00-21:20</td>
                <td>第二位講者</td>
              </tr>
              <tr>
                <td>21:20-21:30</td>
                <td>討論時間</td>
              </tr>
              <tr>
                <td>21:30</td>
                <td>填寫回饋問卷，結束</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      {/* Footer */}
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            Hand crafted by
            <span className="icon">
              <i className="fas fa-heart" />
            </span>
          </p>
          <p>
            <a href="https://bulma.io">
              <img src={madeWithBulma} alt="Made with Bulma" width="128" height="24" />
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
