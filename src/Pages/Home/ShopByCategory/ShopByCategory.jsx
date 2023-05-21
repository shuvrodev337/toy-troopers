import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCategoryCard from "./ToyCategoryCard";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  const [categoryName, setCategoryName] = useState("Superheroes");
  // const handleCategory= categoryName =>{
  //     console.log(categoryName);
  //     fetch(`https://toy-troopers-server.vercel.app/toysCategory/${categoryName}`)
  //     .then(res=>res.json())
  //     .then(data=>setToys(data))
  // }

  useEffect(() => {
    fetch(`https://toy-troopers-server.vercel.app/toysCategory/${categoryName}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [categoryName]);
  return (
    <div className="my-28">
      <div className="my-10 " >
        <h1 className="text-5xl text-teal-400 font font-bold text-center">
          Here are our most Popular Action Figure Toys <br /> Sub-Categories
        </h1>
      </div>
      <Tabs>
        <TabList>
          <Tab onClick={() => setCategoryName("Superheroes")}>
            Superheroes
          </Tab>
          <Tab onClick={() => setCategoryName("Anime")}>
            Anime
          </Tab>
          <Tab onClick={() => setCategoryName("Movies and fantasy")}>
            Movies and Fantasy
          </Tab>
        </TabList>

        <TabPanel>
          <div className="grid md:grid-cols-2 gap-10 my-8 ">
            {toys.slice(0, 2).map((toy) => (
              <ToyCategoryCard key={toy._id} toy={toy}></ToyCategoryCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-2 gap-10 my-8 ">
            {toys.slice(0, 2).map((toy) => (
              <ToyCategoryCard key={toy._id} toy={toy}></ToyCategoryCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-2 gap-10 my-8 ">
            {toys.slice(0, 2).map((toy) => (
              <ToyCategoryCard key={toy._id} toy={toy}></ToyCategoryCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
