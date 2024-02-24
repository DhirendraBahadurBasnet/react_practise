import React from 'react';
import Card from './Card';
import Dataa from './Dataa';

const Appp = ()=> {
   return(   <>
    <h1 className='heading_style' >netflix top 3 series</h1>
     {/* <Card 
         imgsrc={Dataa[0].imgsrc}
         title={Dataa[0].title}
         sname={Dataa[0].sname}
         link={Dataa[0].link}
     />
     <Card
         imgsrc={Dataa[1].imgsrc}
         title={Dataa[1].title}
         sname={Dataa[1].sname}
         link={Dataa[1].link}
      />
 
     <Card  
         imgsrc={Dataa[2].imgsrc}
         title={Dataa[2].title}
         sname={Dataa[2].sname}
         link={Dataa[2].link}
 
         /> */}
       { Dataa.map((val) => {
         return (
         <Card 
         key={val.id}
         imgsrc={val.imgsrc}
         title={val.title}
         sname={val.sname}
         link={val.link}
     />
         );
       })}
      
 
     </>
);
      };

export default Appp;