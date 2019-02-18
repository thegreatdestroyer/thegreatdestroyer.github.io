const {
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  TetherContent,
  Tooltip
} = Reactstrap;

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      searchResults: []
    }
    
    this.search = this.search.bind(this);
  }
  
  showResults(response) {
    this.setState({
      searchResults: response.results
    })
    console.log(response)
  }
  
  search(URL) {
    $.ajax({
      type: "GET",
      dataType: 'jsonp',
      url: URL,
      success: function(response) {
        this.showResults(response);
      }.bind(this)
    });
  }
  
  render() {
    return (
      <div className="container justify-content-center margin-top">
        <div className="row align-self-center w-100">
          <div className="col-6 mx-auto">
            <SearchBox search={this.search}/>
            <Results searchResults={this.state.searchResults} />
          </div>
        </div>
      </div>
    )
  }
}

class SearchBox extends React.Component {
  createAjax(){
      var query = ReactDOM.findDOMNode(this.refs.query).value;
      var URL = 'https://itunes.apple.com/search?term=' + query + '&country=us&entity=software';
      this.props.search(URL)
    }

  render() {    
    return (
      <div>
        <input type="text" ref="query"/>
        <Button onClick={this.createAjax.bind(this)}>Отправить</Button>
          </div>
    )
  }
}


class Results extends React.Component {                                                
  render() {
    var resultItems = this.props.searchResults.map((result) =>
      <ResultItem key={result.trackId} trackName={result.trackName} /> 
  )
    return (
      <div>
        <ul style={{ color: "red"}}>
          {resultItems}
        </ul>
      </div>
    )
  }
}

class ResultItem extends React.Component {
  render() {
    return (
      <div className="container justify-content-center card card-1">{this.props.trackName}</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
