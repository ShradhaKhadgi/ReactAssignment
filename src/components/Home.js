import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Home = () => {
  const [data, setData] = useState([]);
  //   Because https://hoblist.com/api/movieList this API was not working so I picked up any free API from JSONPlaceholder to complete the task.
  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    setData(await res.json());
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container-fluid c-body">
        <div className="row mx-5">
          {data.map((elem) => {
            return (
              <div className="col-lg-4 col-md-4 col-sm-6 col-12" key={elem.id}>
                <div className="card m-auto my-5" style={{ width: "25rem" }}>
                  <img
                    src="https://picsum.photos/300/150"
                    className="card-img-top"
                    alt="userpic"
                  />
                  <div className="card-body">
                    <h5 className="card-title fs-2">{elem.name}</h5>
                    <h5 className="card-title" style={{ color: "#c9c9c9" }}>
                      {elem.email}
                    </h5>
                    <p className="card-text fs-5">
                      <label>Address:</label> {elem.address.street}{" "}
                      {elem.address.suite} {elem.address.city}{" "}
                      {elem.address.zipcode}
                    </p>
                    <p className="card-text fs-5">
                      <label>Phone:</label> {elem.phone}
                    </p>
                    <p className="card-text fs-5">
                      <label>Website:</label> {elem.website}
                    </p>
                    <button className="btn fs-5">Watch</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
