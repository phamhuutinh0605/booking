import React from "react";
import { useNavigate } from "react-router-dom";

const SearchItem = () => {
  const navigate=useNavigate();
  const handleCheckRoom=()=>{
    navigate("/hotels/detail",)
  }
  return (
    <>
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/379779995.jpg?k=9f139953f0d9fd330097e5eff77f0b1b74bc9a4dfc21f30cd2b4fe0dc94c3a65&o=&hp=1"
          alt=""
          className="searchItemImg"
        />
        <div className="searchItemDesc">
          <h1 className="searchItemTitle">
            THE SONG HAPPY HOME VUNG TAU 5 STAR APARTMENT (CĂN HỘ BIỂN)
          </h1>
          <span className="searchItemDistance">500m²</span>
          <span className="searchItemTaxiOp">Miễn phí taxi</span>
          <span className="searchItemSubtitle">Cách bãi biển 400m</span>
          <span className="searchItemFeatures">
            Nằm cách Bãi Sau 800 m, THE SONG HAPPY HOME VUNG TAU 5 STAR
            APARTMENT (CĂN HỘ BIỂN) có hồ bơi ngoài trời, khu vườn cũng như chỗ
            nghỉ gắn máy điều hòa với sân hiên và WiFi miễn phí.
          </span>
          <span className="searchItemCancelOp">Hủy miễn phí</span>
          <span className="searchItemCancelOpSubtitle">
            Bạn có thể hủy sau, vì vậy hãy khóa mức giá tuyệt vời này ngay hôm
            nay!
          </span>
        </div>
        <div className="searchItemDetails">
          <div className="searchItemRating">
            <span>Tốt</span>
            <button>8.9</button>
          </div>
          <div className="searchItemDetailTexts">
            <span className="searchItemPrice">2.500.000 VNĐ</span>
            <span className="searchItemTaxOp">Đã bao gồm thuế và phí</span>
            <button className="searchItemCheckButton" onClick={handleCheckRoom}>Xem phòng trống</button>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/411528546.jpg?k=19d68e36b002d74df34591daa5b87130de5021d0183624157309fd4e5079bbce&o=&hp=1"
          alt=""
          className="searchItemImg"
        />
        <div className="searchItemDesc">
          <h1 className="searchItemTitle">
            THE SONG HAPPY HOME VUNG TAU 5 STAR APARTMENT (CĂN HỘ BIỂN)
          </h1>
          <span className="searchItemDistance">500m²</span>
          <span className="searchItemTaxiOp">Miễn phí taxi</span>
          <span className="searchItemSubtitle">Cách bãi biển 400m</span>
          <span className="searchItemFeatures">
            Nằm cách Bãi Sau 800 m, THE SONG HAPPY HOME VUNG TAU 5 STAR
            APARTMENT (CĂN HỘ BIỂN) có hồ bơi ngoài trời, khu vườn cũng như chỗ
            nghỉ gắn máy điều hòa với sân hiên và WiFi miễn phí.
          </span>
          <span className="searchItemCancelOp">Hủy miễn phí</span>
          <span className="searchItemCancelOpSubtitle">
            Bạn có thể hủy sau, vì vậy hãy khóa mức giá tuyệt vời này ngay hôm
            nay!
          </span>
        </div>
        <div className="searchItemDetails">
          <div className="searchItemRating">
            <span>Tốt</span>
            <button>8.9</button>
          </div>
          <div className="searchItemDetailTexts">
            <span className="searchItemPrice">2.500.000 VNĐ</span>
            <span className="searchItemTaxOp">Đã bao gồm thuế và phí</span>
            <button className="searchItemCheckButton" onClick={handleCheckRoom}>Xem phòng trống</button>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
          alt=""
          className="searchItemImg"
        />
        <div className="searchItemDesc">
          <h1 className="searchItemTitle">
            THE SONG HAPPY HOME VUNG TAU 5 STAR APARTMENT (CĂN HỘ BIỂN)
          </h1>
          <span className="searchItemDistance">500m²</span>
          <span className="searchItemTaxiOp">Miễn phí taxi</span>
          <span className="searchItemSubtitle">Cách bãi biển 400m</span>
          <span className="searchItemFeatures">
            Nằm cách Bãi Sau 800 m, THE SONG HAPPY HOME VUNG TAU 5 STAR
            APARTMENT (CĂN HỘ BIỂN) có hồ bơi ngoài trời, khu vườn cũng như chỗ
            nghỉ gắn máy điều hòa với sân hiên và WiFi miễn phí.
          </span>
          <span className="searchItemCancelOp">Hủy miễn phí</span>
          <span className="searchItemCancelOpSubtitle">
            Bạn có thể hủy sau, vì vậy hãy khóa mức giá tuyệt vời này ngay hôm
            nay!
          </span>
        </div>
        <div className="searchItemDetails">
          <div className="searchItemRating">
            <span>Tốt</span>
            <button>8.9</button>
          </div>
          <div className="searchItemDetailTexts">
            <span className="searchItemPrice">2.500.000 VNĐ</span>
            <span className="searchItemTaxOp">Đã bao gồm thuế và phí</span>
            <button className="searchItemCheckButton" onClick={handleCheckRoom}>Xem phòng trống</button>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/413220598.jpg?k=e40ac0851aaaa267b7b8306f157adbe82f61e47f2ea10082b43883e51024596b&o=&hp=1"
          alt=""
          className="searchItemImg"
        />
        <div className="searchItemDesc">
          <h1 className="searchItemTitle">
            THE SONG HAPPY HOME VUNG TAU 5 STAR APARTMENT (CĂN HỘ BIỂN)
          </h1>
          <span className="searchItemDistance">500m²</span>
          <span className="searchItemTaxiOp">Miễn phí taxi</span>
          <span className="searchItemSubtitle">Cách bãi biển 400m</span>
          <span className="searchItemFeatures">
            Nằm cách Bãi Sau 800 m, THE SONG HAPPY HOME VUNG TAU 5 STAR
            APARTMENT (CĂN HỘ BIỂN) có hồ bơi ngoài trời, khu vườn cũng như chỗ
            nghỉ gắn máy điều hòa với sân hiên và WiFi miễn phí.
          </span>
          <span className="searchItemCancelOp">Hủy miễn phí</span>
          <span className="searchItemCancelOpSubtitle">
            Bạn có thể hủy sau, vì vậy hãy khóa mức giá tuyệt vời này ngay hôm
            nay!
          </span>
        </div>
        <div className="searchItemDetails">
          <div className="searchItemRating">
            <span>Tốt</span>
            <button>8.9</button>
          </div>
          <div className="searchItemDetailTexts">
            <span className="searchItemPrice">2.500.000 VNĐ</span>
            <span className="searchItemTaxOp">Đã bao gồm thuế và phí</span>
            <button className="searchItemCheckButton" onClick={handleCheckRoom}>Xem phòng trống</button>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/56426000.jpg?k=7d68f04918ad4854864f38a8f6859dd5dab1e3906628ef8359a68110702f8505&o=&hp=1"
          alt=""
          className="searchItemImg"
        />
        <div className="searchItemDesc">
          <h1 className="searchItemTitle">
            THE SONG HAPPY HOME VUNG TAU 5 STAR APARTMENT (CĂN HỘ BIỂN)
          </h1>
          <span className="searchItemDistance">500m²</span>
          <span className="searchItemTaxiOp">Miễn phí taxi</span>
          <span className="searchItemSubtitle">Cách bãi biển 400m</span>
          <span className="searchItemFeatures">
            Nằm cách Bãi Sau 800 m, THE SONG HAPPY HOME VUNG TAU 5 STAR
            APARTMENT (CĂN HỘ BIỂN) có hồ bơi ngoài trời, khu vườn cũng như chỗ
            nghỉ gắn máy điều hòa với sân hiên và WiFi miễn phí.
          </span>
          <span className="searchItemCancelOp">Hủy miễn phí</span>
          <span className="searchItemCancelOpSubtitle">
            Bạn có thể hủy sau, vì vậy hãy khóa mức giá tuyệt vời này ngay hôm
            nay!
          </span>
        </div>
        <div className="searchItemDetails">
          <div className="searchItemRating">
            <span>Tốt</span>
            <button>8.9</button>
          </div>
          <div className="searchItemDetailTexts">
            <span className="searchItemPrice">2.500.000 VNĐ</span>
            <span className="searchItemTaxOp">Đã bao gồm thuế và phí</span>
            <button className="searchItemCheckButton" onClick={handleCheckRoom}>Xem phòng trống</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchItem;
