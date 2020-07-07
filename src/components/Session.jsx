import React from 'react';

function Session() {
  return (
    <div className="box">
      <div className="columns is-desktop">
        <div className="column is-narrow content px-4 py-4">
          <h3>基本資訊</h3>
          <ul>
            <li>時間：2020/9 09:00-11:00 AM</li>
            <li>地點：學成 K 書中心 會議室</li>
            <li>地址：台北市中正區南陽街 15-5 號 2 樓</li>
          </ul>
          <div className="is-size-4 is-italic has-text-danger mt-6">詳細日期未定，靜待更新</div>
        </div>
        <div className="column">
          <iframe
            title="學成K書中心"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.6997380850594!2d121.51395295082983!3d25.044261983888894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a97338246daf%3A0x3454385af41b34db!2z5a245oiQa-abuOS4reW_gw!5e0!3m2!1szh-TW!2stw!4v1592393637372!5m2!1szh-TW!2stw"
            width="100%"
            height="300"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
          />
        </div>
      </div>
    </div>
  );
}

export default Session;