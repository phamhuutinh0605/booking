import React from "react";

const MailList = () => {
  return (
    <div className="mail">
     <div className="mailContainer">
     <h1 className="mailTitle">Tiết kiệm thời gian và tiền bạc!</h1>
      <span className="mailDesc">Hãy đăng ký và chúng tôi sẽ gửi những ưu đãi tốt nhất cho bạn</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Địa chỉ e-mail của bạn" />
        <button>Đăng ký</button>
      </div>
     </div>
    </div>
  )
}

export default MailList