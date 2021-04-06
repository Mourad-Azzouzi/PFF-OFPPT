import React from 'react';
import Navbar from '../AdminNavs/navTop';

export default class ManageFeedbacks extends React.Component {
   constructor(){
      super()
      this.state = {
         feedback: [
            {key:"100",feedback:"Exellent Service",nomcomplet:"Mohamed ad",tel:"0642254111"},
            {key:"101",feedback:"Cool Service",nomcomplet:"Asmae ad",tel:"0642254550"},
            {key:"102",feedback:"Bon Qualité",nomcomplet:"Imane ad",tel:"0642254878"},
            {key:"103",feedback:"Super Plat",nomcomplet:"Amine ad",tel:"0642254646"},
            {key:"104",feedback:"Je suis Satisfaite",nomcomplet:"Ahlam ad",tel:"0642255454"},
            {key:"105",feedback:"Vraiment Wowwwww . je recommender",nomcomplet:"Chaimae ad",tel:"0642252154"},
            {key:"106",feedback:"Je suis satisfait service wa3r",nomcomplet:"Amine",tel:"0642250114"},
            {key:"107",feedback:"Exellent Service",nomcomplet:"Alae ad",tel:"0642254879"},
            {key:"108",feedback:"Satisfaite",nomcomplet:"Adil ad",tel:"0642254644"},
            {key:"109",feedback:"Wowwwww . trés cool",nomcomplet:"Mohamed ad",tel:"0642546421"},
            {key:"110",feedback:"Milleur Plats",nomcomplet:"Mourad ad",tel:"0642215610"},
            {key:"111",feedback:"Exellent Service",nomcomplet:"Abdellah ad",tel:"0642254902"},
         ]
      }
   }
   RenderFeedbacksTable = ( Feedbacks ) => {
      return(
         <table className="table table-bordered mt-2 mb-4">
            <tr className="border-info bg-info text-white">
               <th className="pt-2 pb-2 px-3">Feedback ID</th>
               <th className="pt-2 pb-2 px-3">Feedback</th>
               <th className="pt-2 pb-2 px-3">Nom Complet</th>
               <th className="pt-2 pb-2 px-3">Tel</th>
               <th className="pt-2 pb-2 px-3">Accepter | Rufuser</th>
            </tr>
            {
               Feedbacks.map( (f) => 
               <tr className="border-dark" key={f.key}>
                  <td className="pt-2 pb-2 px-3">{f.key}</td>
                  <td className="pt-2 pb-2 px-3">{f.feedback}</td>
                  <td className="pt-2 pb-2 px-3">{f.nomcomplet}</td>
                  <td className="pt-2 pb-2 px-3">{f.tel}</td>
                  <td className="pt-2 pb-2 px-3">
                     <a href="" className="p-0">Accepter</a>&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                     <a href="" className="p-0">Refuser</a>
                  </td>
               </tr>
               )
            }
         </table>
      )
   }

   render(){
      return(
         <div className="ManageFeedbacks">
            <Navbar />
            <div className="feedbacks">
               <div className="container">
                  <h3>Manage Feedbacks</h3>
                  <hr/>
                  <h6 className="">Liste des feedbacks</h6>
                  {this.RenderFeedbacksTable(this.state.feedback)}
               </div>
            </div>
         </div>
      )
   }
}