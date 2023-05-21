import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyCategoryCard from './ToyCategoryCard';

const ShopByCategory = () => {
    const [toys, setToys] = useState([])
    const [categoryName , setCategoryName] = useState('Superheroes')
    // const handleCategory= categoryName =>{
    //     console.log(categoryName);
    //     fetch(`http://localhost:3000/toysCategory/${categoryName}`)
    //     .then(res=>res.json())
    //     .then(data=>setToys(data))
    // }

    useEffect(()=>{
        fetch(`http://localhost:3000/toysCategory/${categoryName}`)
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[categoryName])
    return (
        <Tabs>
        <TabList>
          <Tab onClick={()=>setCategoryName('Superheroes')}>Superheroes Action Figure Toys</Tab>
          <Tab onClick={()=>setCategoryName('Anime')}>Anime Action Figure Toys</Tab>
          <Tab onClick={()=>setCategoryName('Movies and fantasy')}>Movies and Fantasy Action Figure Toys</Tab>
        </TabList>
    
        <TabPanel>
          <div className='grid md:grid-cols-2 gap-10 my-8'>
          {
            toys.slice(0,2).map(toy=><ToyCategoryCard key={toy._id} toy={toy}></ToyCategoryCard>)
          }
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid md:grid-cols-2 gap-10 my-8'>
          {
            toys.slice(0,2).map(toy=><ToyCategoryCard key={toy._id} toy={toy}></ToyCategoryCard>)
          }
          </div>
        </TabPanel>
        <TabPanel>
          <div className=' space-y-4 md:grid grid-cols-2 gap-4 py-8 items-baseline'>
          {
            toys.slice(0,2).map(toy=><ToyCategoryCard key={toy._id} toy={toy}></ToyCategoryCard>)
          }
          </div>
        </TabPanel>
        
      </Tabs>
    );
};

export default ShopByCategory;