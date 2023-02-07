import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/mailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Hotel = () => {
  // const [slideNumber, setSlideNumber] = useState(0);
  // const [open, setOpen] = useState(false);

  const location=useLocation();
  console.log(location)
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  // const handleOpen = (i) => {
  //   setSlideNumber(i);
  //   setOpen(true);
  // };

  // const handleMove = (direction) => {
  //   let newSlideNumber;

  //   if (direction === "l") {
  //     newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
  //   } else {
  //     newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
  //   }

  //   setSlideNumber(newSlideNumber);
  // };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {/* {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )} */}
        <div className="hotelWrapper">
          <button className="bookNow">Đặt căn hộ của bạn</button>
          <h1 className="hotelTitle">THE SONG HAPPY HOME VUNG TAU 5 STAR APARTMENT (CĂN HỘ BIỂN)</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span> 28 Đường Thi Sách, Vũng Tàu, Việt Nam</span>
          </div>
          <span className="hotelDistance">
          Vị trí đắc địa – cách trung tâm 500m
          </span>
          <span className="hotelPriceHighlight">
          Đặt kỳ nghỉ trên 2.000.000 VNĐ tại khách sạn này sẽ được miễn phí taxi. 
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  // onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Các tiện nghi được ưa chuộng nhất</h1>
              <p className="hotelDesc">
                Nằm cách Bãi Sau 800 m, THE SONG HAPPY HOME VUNG TAU 5 STAR
                APARTMENT (CĂN HỘ BIỂN) có hồ bơi ngoài trời, khu vườn cũng như
                chỗ nghỉ gắn máy điều hòa với sân hiên và WiFi miễn phí. Chỗ
                nghỉ này cung cấp chỗ đỗ xe riêng ngay trong khuôn viên. Tất cả
                các căn tại đây đều được bố trí phòng tắm riêng, TV màn hình
                phẳng, bếp đầy đủ vật dụng và ban công. Khu du lịch sinh thái và
                văn hóa Hồ Mây nằm cách căn hộ 3,8 km trong khi Bạch Dinh cách
                đó 4,1 km. Sân bay gần nhất là sân bay Vũng Tàu, nằm trong bán
                kính 3 km từ THE SONG HAPPY HOME VUNG TAU 5 STAR APARTMENT (CĂN
                HỘ BIỂN).
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Điểm nổi bật của chỗ nghỉ</h1>
              <span>
              Có chỗ đậu xe riêng trong khuôn viên
              </span>
              <h2>
                <b>2.500.000 VNĐ</b>
              </h2>
              <button>Đặt ngay</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
