import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import madeWithBulma from 'assets/made-with-bulma.png';
import Speaker from './components/Speaker';
import InfoCard from './components/InfoCard';
import 'App.scss';

AOS.init({
  duration: 1000,
  once: true,
});

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

function Button({ icon, text, url }) {
  return (
    <div className="column">
      <a className="is-fullwidth is-rounded button is-medium" href={url} target="_blank" rel="noopener noreferrer">
        <i className={`${icon} mr-3 fa-lg`} />
        {text}
      </a>
    </div>
  );
}

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { sessionList = [], speechInfo = [] } = data;
  const [, date, start, end, weekday] = sessionList;

  useEffect(() => {
    async function fetchDate() {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbxcB9OFz8aWg6aSU4FpuMju9FqxlQBK0LQXrp9RQ6rLVdb9uzEvfK1J/exec',
      );
      const json = await response.json();
      return json;
    }

    fetchDate().then((json) => {
      setData(json);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="App">
      {/* Hero title */}
      <section className="hero is-bold has-text-centered banner">
        <div className="hero-body">
          <div className="py-5 border-box container">
            <div className="title is-size-1">讀書分享會</div>
            <div className="subtitle">多一點時間，聆聽一本好書</div>
          </div>
        </div>
      </section>
      <section className="hero is-small is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <Button icon="fas fa-user-plus" text="報 名 場 次" url="https://forms.gle/zEMm6eY1gTv8Tj3j6" />
              <Button icon="fas fa-microphone-alt" text="想 當 講 者" url="https://forms.gle/8Bx8H4bz7bMcmQYd7" />
              <Button icon="fas fa-book" text="想 推 薦 書" url="https://forms.gle/RJCALtMgCj1Bkr3v7" />
            </div>
          </div>
        </div>
      </section>
      {isLoading ? (
        <div className="hero is-small">
          <div className="has-text-centered">讀取資料...</div>
          <div className="hero-body button is-loading is-large" />
        </div>
      ) : (
        <>
          {/* Venue */}
          <section className="section">
            <div className="container">
              <Title>基本資訊</Title>
              <div className="columns">
                <InfoCard>
                  <ul>
                    <li>
                      <span>{`時間：${date}`}</span>
                      <span>{weekday && `(${weekday[1]}) ${start}-${end}`}</span>
                    </li>
                    <li>類型：線上讀書會</li>
                    <li>
                      工具：開場前半小時發送會議連結，聽眾自行登入
                      <a href="https://meet.google.com/"> Google Meet </a>
                      。
                    </li>
                    <li>
                      裝置：電腦請開啟
                      <a href="https://meet.google.com/">網頁版</a>
                      ，手機則分別下載
                      <a href="https://apps.apple.com/tw/app/google-meet/id1013231476"> iOS </a>
                      /
                      <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.meetings&hl=zh_TW"> Android </a>
                      app。（或是透過
                      <a href="https://www.google.com/gmail/"> Gmail </a>
                      亦可）
                    </li>
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
                  {speechInfo.map(([, name, title, subject, blockquote, description], i) => (
                    <div className="column" key={`speaker${i.toString()}`}>
                      <Speaker
                        name={name}
                        title={title}
                        subject={subject}
                        blockquote={blockquote}
                        description={description}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          {/* Notice */}
          <section className="section">
            <div className="container">
              <Title>注意事項</Title>
              <div className="columns">
                <InfoCard title="參與中" col={6}>
                  <ul>
                    <li>不發出其他聲響干擾演講者，如播音樂。</li>
                    <li>
                      中途離席
                      <span className="tag is-warning is-light is-medium px-0">不需</span>
                      告知。
                    </li>
                  </ul>
                </InfoCard>
                <InfoCard title="參與後" col={6}>
                  <ul>
                    <li>
                      填寫
                      <span className="tag is-warning is-light is-medium px-0">回饋意見表單</span>
                      ，感謝參與，連結將在結束後發送。
                    </li>
                    <li>報名擔任講者請洽 Niko。</li>
                  </ul>
                </InfoCard>
              </div>
            </div>
          </section>
          {/* Agenda */}
          <section className="hero is-primary is-bold">
            <div className="hero-body">
              <div className="container">
                <Title>議程</Title>
                <InfoCard>
                  <table className="table" style={{ width: '100%' }}>
                    <thead>
                      <tr>
                        <th>時間</th>
                        <th>活動</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>會議開始前 30 分鐘</td>
                        <td>發送 Google Meet 會議代碼</td>
                      </tr>
                      <tr>
                        <td>{start || '未定'}</td>
                        <td>會議開始</td>
                      </tr>
                      <tr>
                        <td>每位講者 20 分鐘</td>
                        <td>好書分享</td>
                      </tr>
                      <tr>
                        <td>每位講者 10 分鐘</td>
                        <td>聽眾討論</td>
                      </tr>
                      <tr>
                        <td>{end || '未定'}</td>
                        <td>填寫回饋問卷，結束</td>
                      </tr>
                    </tbody>
                  </table>
                </InfoCard>
              </div>
            </div>
          </section>
        </>
      )}
      {/* Footer */}
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            Hand crafted by Niko
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
