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
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/411528546.jpg?k=19d68e36b002d74df34591daa5b87130de5021d0183624157309fd4e5079bbce&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/360576584.jpg?k=c2ab1b2a40d370d78ccfea2b22098bbb95d1aaebcc598bf79d08516ab99ea0c8&o=&hp=1",
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
          <button className="bookNow">?????t c??n h??? c???a b???n</button>
          <h1 className="hotelTitle">THE SONG HAPPY HOME VUNG TAU 5 STAR APARTMENT (C??N H??? BI???N)</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span> 28 ???????ng Thi S??ch, Vu??ng Ta??u, Vi????t Nam</span>
          </div>
          <span className="hotelDistance">
          V??? tr?? ?????c ?????a ??? c??ch trung t??m 500m
          </span>
          <span className="hotelPriceHighlight">
          ?????t k??? ngh??? tr??n 2.000.000 VN?? t???i kh??ch s???n n??y s??? ???????c mi???n ph?? taxi. 
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
              <h1 className="hotelTitle">C??c ti???n nghi ???????c ??a chu???ng nh???t</h1>
              <p className="hotelDesc">
                N???m c??ch B??i Sau 800 m, THE SONG HAPPY HOME VUNG TAU 5 STAR
                APARTMENT (C??N H??? BI???N) c?? h??? b??i ngo??i tr???i, khu v?????n c??ng nh??
                ch??? ngh??? g???n m??y ??i???u h??a v???i s??n hi??n v?? WiFi mi???n ph??. Ch???
                ngh??? n??y cung c???p ch??? ????? xe ri??ng ngay trong khu??n vi??n. T???t c???
                c??c c??n t???i ????y ?????u ???????c b??? tr?? ph??ng t???m ri??ng, TV m??n h??nh
                ph???ng, b???p ?????y ????? v???t d???ng v?? ban c??ng. Khu du l???ch sinh th??i v??
                v??n h??a H??? M??y n???m c??ch c??n h???? 3,8 km trong khi B???ch Dinh c??ch
                ???? 4,1 km. S??n bay g???n nh???t l?? s??n bay V??ng T??u, n???m trong b??n
                k??nh 3 km t??? THE SONG HAPPY HOME VUNG TAU 5 STAR APARTMENT (C??N
                H??? BI???N).
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>??i???m n???i b???t c???a ch??? ngh???</h1>
              <span>
              C?? ch??? ?????u xe ri??ng trong khu??n vi??n
              </span>
              <h2>
                <b>2.500.000 VN??</b>
              </h2>
              <button>?????t ngay</button>
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
