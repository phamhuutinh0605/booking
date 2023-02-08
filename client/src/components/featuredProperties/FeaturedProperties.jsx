import React from "react";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">12 Pasteur, Hồ Chí Minh</span>
        <span className="fpPrice">Bắt đầu từ VND 2.554.000</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Tốt</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Prague Residences</span>
        <span className="fpCity">33 Bạch Đằng, Tp. Cần Thơ</span>
        <span className="fpPrice">Bắt đầu từ VND 2.667.006</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Xuất sắc</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://q-xx.bstatic.com/xdata/images/hotel/300x240/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Villa Limen</span>
        <span className="fpCity">29 Hai Bà Trưng, Tp. Đà Lạt</span>
        <span className="fpPrice">Bắt đầu từ VND 1.247.454</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Tốt</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Khách sạn Hilton Garden</span>
        <span className="fpCity">193 Hoàng Diệu, Tp. Hải Phòng</span>
        <span className="fpPrice">Bắt đầu từ VND 4.797.123</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Tốt</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
