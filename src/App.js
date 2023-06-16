import { useState, useEffect } from "react";
import { format } from "date-fns";
import { v4 } from "uuid";

import List from "./List";

import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const [data, setData] = useState([]);

  const changeName = (event) => {
    setName(event.target.value);
  };

  const changeDate = (event) => {
    setDate(event.target.value);
  };

  const del = (id) => {
    const r = data.filter((i) => i.id !== id);

    setData(r);
  };

  const click = (id) => {
    const r1 = data.map((i) => {
      if (i.id === id) {
        return { ...i, isClicked: !i.isClicked };
      }
      return i;
    });

    setData(r1);
  };

  const submit = (event) => {
    event.preventDefault();
    const fD = date ? format(new Date(date), "dd MMMM yyyy, EEEE") : "";
    const newL = {
      id: v4(),
      name,
      date: fD,
      isClicked: false,
    };
    setData((i) => [...i, newL]);
    setName("");
    setDate("");
  };

  const sp = () => {
    localStorage.setItem("a", JSON.stringify(data));
  };

  const star = () => {
    const r = data.filter((i) => i.isClicked === true);
    setData(r);
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("a")) !== null) {
      setData(JSON.parse(localStorage.getItem("a")));
    }
  }, []);

  return (
    <div className="bg">
      <div className="c">
        <h2>
          ADD <span>APPOINTMENT</span>
        </h2>
        <form onSubmit={submit}>
          <label>Name</label>
          <br />
          <input
            className="in"
            type="text"
            onChange={changeName}
            value={name}
            placeholder="Add Name...."
          />
          <br />
          <label>Date</label>
          <br />
          <input
            className="in"
            type="date"
            onChange={changeDate}
            value={date}
            placeholder="ADD DATE..."
          />
          <br />
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn1" type="button" onClick={sp}>
              SAVE
            </button>
          </div>
        </form>
        <div className="bot">
          <div className="bot1">
            <h2>Appointments</h2>
            <button className="bs" onClick={star}>
              Starred
            </button>
          </div>
          <ul>
            {data.map((i) => (
              <List key={i.id} detail={i} btn={del} btn1={click} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
