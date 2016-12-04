import My from '../../components/main/Main';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.init();
  }
  init(){
    this.state = {
      data: [{
        name: '关于'
      },{
        name: '我们'
      },{
        name: '测试'
      }]
    };
  }
  componentDidMount() {

  }
  say() {
    return (
      <div>
        <div>我是</div>
      </div>
    );
  }
  render() {
    let dataList = this.state.data.map((item, index) => {
      return (
        <div className="about-box" key={index}>
          {item.name}
          {this.say()}
        </div>
      );
    });
    return (
      <div className="about-content">
        {dataList}
        <My />
      </div>
    );
  }

}

export default Content;
