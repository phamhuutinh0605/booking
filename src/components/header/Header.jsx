import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
// thư viện date-range: hiển thị menu ngày
import { DateRange } from "react-date-range"; // thư viện date-range
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns"; //format ngày
import { useNavigate } from "react-router-dom";

// type: để component hotels chỉ hiển thị phần navBar và headerList
const Header = ({ type }) => {
  // chọn ngày đi, ngày về
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openDate, setOpenDate] = useState(false);

  // đặt số người mặc định
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  // chọn số lượng người
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev, // prev: giữ lại những pt khong thay đổi value
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        // [name]: tên thuộc tính (adult, children, room).
        // nếu giá trị (operation)===i thì giá trị của đối tượng (options[name]) +1, ngược lại -1.
      };
    });
  };
  const [openOptions, setOpenOptions] = useState(false);

  // gửi dữ liệu qua trang hotels
  const [destination, setDestination] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    //useNavigate: chuyển sang trang khác và đem theo dữ liệu.
    navigate("/hotels",{ state: {destination,date,options} });
  };
  return (
    <div className="header">
      {/* nếu type===list thì class là headerContainer listMode, 
      ngược lại là headerContainer*/}
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerlist">
          <div className="headerListItems active">
            <FontAwesomeIcon icon={faBed} />
            <span>Lưu trú</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faPlane} />
            <span>Chuyến bay</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faCar} />
            <span>Thuê xe</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faBed} />
            <span>Địa điểm tham quan</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxi sân bay</span>
          </div>
        </div>
        {/* cho type khác list để phần này khong được hiển thị trong Hotels */}
        {type !== "list" && (
          <>
            <h1 className="headeTitle">Tìm chỗ nghỉ tiếp theo</h1>
            <p className="headerDecs">
              Tìm ưu đãi khách sạn, chỗ nghỉ dạng nhà và nhiều hơn nữa...
            </p>

            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} />
                <input
                  placeholder="Bạn muốn đến đâu?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "dd/MM/yyyy")} đến ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )} `}</span>
                {/* hiển thị menu chọn ngày */}
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} />
                <span
                  className="headerSearchText"
                  onClick={() => {
                    setOpenOptions(!openOptions);
                  }}
                >
                  {`${options.adult} người lớn · ${options.children} trẻ em · ${options.room} phòng`}
                </span>
                {openOptions && (
                  <div className="options">
                    {/* hiển thị menu chọn số lượng */}
                    <div className="optionItem">
                      <span className="optionText">Người lớn</span>
                      <div className="optionCounter">
                        <button
                          className="optionCounterBtn"
                          onClick={() => {
                            handleOption("adult", "d");
                          }}
                          disabled={options.adult <= 1}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber " disabled>
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterBtn"
                          onClick={() => {
                            handleOption("adult", "i");
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Trẻ em</span>
                      <div className="optionCounter">
                        <button
                          className="optionCounterBtn"
                          onClick={() => {
                            handleOption("children", "d");
                          }}
                          disabled={options.children <= 0}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterBtn"
                          onClick={() => {
                            handleOption("children", "i");
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Phòng</span>
                      <div className="optionCounter">
                        <button
                          className="optionCounterBtn"
                          onClick={() => {
                            handleOption("room", "d");
                          }}
                          disabled={options.room <= 1}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterBtn"
                          onClick={() => {
                            handleOption("room", "i");
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerSearchBtn" onClick={handleSearch}>Tìm</button>
              </div>
            </div>
          </>
        )}{" "}
        {/* kết thúc phần không hiển thị trong Hotels */}
      </div>
    </div>
  );
};

export default Header;
