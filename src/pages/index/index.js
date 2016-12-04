import './index.less';
//import 'core-js/fn/object/assign';

class Content extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        data: [{
          name: '首页111'
        },{
          name: '内容hahhaddd'
        }]
    };
  }
  componentDidMount() {

  }
  render() {
    let dataList = this.state.data.map((item, index) => {
      return (
        <div className="index-box" key={index}>
          {item.name}
        </div>
      );
    });
    return (
      <div className="index-content">
        {dataList}
      </div>
    );
  }
}

ReactDOM.render (<Content />, document.getElementById('app'));
