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
    </>
  );
};

export default SearchItem;
