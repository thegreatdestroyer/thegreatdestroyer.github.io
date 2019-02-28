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
      searchResults: response
    })
    console.log(response)
  }
  
  async getResp(URL) {
		
    const response = await fetch(URL);
    const data = await response.json();
    
    const [term, shortNames, longNames, urls] = data;
    
    const result = shortNames.map( ( shortName , index ) => ({
      short_name:shortName,
      long_name: longNames[index],
      url: urls[index]
    }));
    
    console.log(result);
    
    return result;
    
  }
  
  search(URL) {
  	this.getResp(URL).then(response => this.showResults(response));
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
      var URL = 'https://ru.wikipedia.org/w/api.php?action=opensearch&limit=5&origin=*&search=' + query;
      this.props.search(URL)
    }

  render() {    
    return (
      <div>
        <input type="text" ref="query"/>
        <input type="button" value="Отправить" onClick={this.createAjax.bind(this)}/>
          </div>
    )
  }
}


class Results extends React.Component {                                                
  render() {
    var resultItems = this.props.searchResults.map((result) =>
      <ResultItem shortName={result.short_name} longNames={result.long_name} urls={result.url} /> 
  )
    return (
      <div>
        <ul>
          {resultItems}
        </ul>
      </div>
    )
  }
}

class ResultItem extends React.Component {
  render() {
    return (
      <div className="container justify-content-center card card-1">
      <a href={this.props.urls}>{this.props.shortName}</a>
      <div>{this.props.longNames}</div></div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));