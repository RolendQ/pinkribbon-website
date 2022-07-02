import React from 'react'
import './queries.css'
import Axios from "axios";


class Queries extends React.Component {

  constructor(props) {
    super(props);
    const initpages=1;
    const pagesize=2;
    this.state = {
      pages: 0  ,  // pages of data that has been loaded
      pagesize: pagesize,
      initpages:initpages,
      headers : [
        { name: 'VrId'},
        { name: 'Rx Otc Schedule'},
        { name: 'Generic Name'},
        { name: 'Product Name'},
        { name: 'Route'},
        { name: 'Strength'},
        { name: 'Dosage Form'},
        { name: 'Labeler'},
        { name: 'Market Status'},
        { name: 'Product Image'},
        { name: 'Ndc'},
        { name: 'How Supplied'},
        { name: 'Vr Brief Name'},
        { name: 'Awp'},
      ],
      tableitems : new Array(initpages*pagesize*14).fill(null),  //dynamic
      headername : ['VrId','Rx Otc Schedule','Generic Name','Product Name','Route','Strength','Dosage Form',
      'Labeler','Market Status','Product Image','Ndc','How Supplied','Vr Brief Name','Awp'],
      testname:['name','stuid','password','class']
    };
  }
  
  get_query = function (){
    Axios.get('http://localhost:3001/user',
      {
        params:{
          Id:this.state.pages,
          pagesize:this.state.pagesize
        }
      }
    ).then((response) => {
      let pages=this.state.pages;
      let buffer=response.data;
      console.log(buffer.length)

      if (pages<this.state.initpages){

        let newitems=this.state.tableitems;
        for (let i=0;i<buffer.length;i++){
          this.state.headername.map((content, idx)=>newitems[(pages+i)*14+idx]=buffer[i][content]);
        }
        this.setState({tableitems : newitems,pages:this.state.pages+1});  //一定注意State的S是大写...
      }
      else{
        let len=this.state.headername.length;
        let newitems=new Array(len*buffer.length).fill(null)
        for (let i=0;i<buffer.length;i++){
          this.state.headername.map((content, idx)=>newitems[idx+i*14]=buffer[i][content]);
        }
        this.setState({tableitems :this.state.tableitems.concat(newitems),pages:this.state.pages+1}); 
      }
  });
}
  test_params=()=>{
    console.log(this.state.pages)
      Axios.get('http://localhost:3001/user',
      {
        params:{
          Id:this.state.pages,
          pagesize:this.state.pagesize
        }
      }
    ).then(
      (response) => {
        this.setState({pages:this.state.pages+1})
        console.log(response.data)
      }
    )
  };
  get_more_data=() => {
    //使用了箭头函数，this确实是query
      let pages=this.state.pages;
      if (pages<5){
        this.state.pages+=1;
        let newitems=this.state.tableitems;
        this.state.headername.map((content, idx)=>newitems[pages*14+idx]=content);
        this.setState({tableitems : newitems});  //一定注意State的S是大写...
      }
      else{
        let len=this.state.headername.length;
        let newitems=new Array(len).fill(null)
        this.state.headername.map((content, idx)=>newitems[idx]=content);
        
        this.setState({tableitems :this.state.tableitems.concat(newitems)}); 
      }
  }

  render() {
    return(
    <div className='queries__container'>
      <div className='queries__grid'>

        {
          this.state.headers.map(({name}, index) => {
            return (
              <div className='queries__header' key={index}>
                {name}
              </div>
            )
          })
        }
        {
          this.state.tableitems.map((content, idx) => 
          <div className='queries__content' key={idx}>{content}</div>)
        }
      </div>
      <button className='queries__more__btn' onClick={()=>this.get_query()} >
        See more
      </button>
    </div>
    ) ;
  }
} 


export default Queries