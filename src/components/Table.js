
import { MDBDataTable } from 'mdbreact';
import React from 'react';

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      items:[],
      isLoaded: false,
    };
  }
  
   fillRows(){
    Promise.resolve(this.props.data()).then((res) => {
          this.setState({
              items: res,
              isLoaded:true,
          })
      })
  }
  
  componentDidMount(){
    this.fillRows();
  }

  componentWillReceiveProps(nextProps)
  {
    if(nextProps.signal!==this.props.signal)
    {
      this.fillRows();
    }
  }
  render() {
    const headers= [
        {
          label: 'email',
          field: 'email',
          sort: 'asc',
        },
        {
          label: 'certificate',
          field: 'certificate',
          sort: 'asc',
        },
        {
          label: 'slot',
          field: 'slot',
          sort: 'asc',
        }
      ];
    
    const { items } = this.state;
    if (!this.state.isLoaded) {
      return <div>Loading ... </div>;
    } else {
    let click=false;
    if(this.props.onClickRow!==undefined)
        {
            click=true;
            items.forEach(item=>{
                item.clickEvent=this.props.onClickRow
            })
        }
    console.log(this.props.signal)
      return (
    <MDBDataTable
      striped
      bordered
      small
      maxHeight={100}
      data={{columns:headers,rows:items}}
      btn ={false}
      hover={click}
    />
      );
    }
  }
}