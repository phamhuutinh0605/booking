import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns"; //format ngày
import { useState } from "react";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/mailList";
const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState();
  const [options, setOptions] = useState(location.state.options);
  console.log(location);
  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Tìm</h1>
            <div className="listItem">
              <label htmlFor="">Tên chỗ nghỉ / điểm đến</label>
              <input type="text" name="" id="" placeholder={destination} />
            </div>
            <div className="listItem">
              <label htmlFor="">Ngày nhận phòng</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "dd/MM/yyyy"
              )} đến ${format(date[0].endDate, "dd/MM/yyyy")} `}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="listItem">
              <label htmlFor="">Lựa chọn</label>
              <div className="listOptions">
                <div className="listOptionItem">
                  <span className="listOptionText">
                    Giá thấp nhất<small>( một đêm )</small>
                  </span>
                  <input
                    type="number"
                    name=""
                    className="listOptionInput"
                    id=""
                  />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionText">
                  Giá cao nhất <small>( một đêm )</small>
                  </span>
                  <input
                    type="number"
                    name=""
                    className="listOptionInput"
                    id=""
                  />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionText">Người lớn</span>
                  <input
                    min={1}
                    type="number"
                    name=""
                    className="listOptionInput"
                    id=""
                    placeholder={options.adult}
                  />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionText">Trẻ em</span>
                  <input
                    min={0}
                    type="number"
                    name=""
                    className="listOptionInput"
                    id=""
                    placeholder={options.children}
                  />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionText">Phòng</span>
                  <input
                    min={1}
                    type="number"
                    name=""
                    className="listOptionInput"
                    id=""
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Tìm</button>
          </div>
          <div className="listResult">
            <SearchItem/>
          </div>
        </div>
      </div>
      <MailList/>
      <Footer/>
    </>
  );
};
export default List;
