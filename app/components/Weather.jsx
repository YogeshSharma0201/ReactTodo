var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openweathermap = require('openweathermap');

var Weather = React.createClass({
  getInitialState: function (){
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this;
    this.setState({
      isLoading: true
    });
    openweathermap.getTemp(location).then(function(temp){
      that.setState({
        isLoading: false,
        location: location,
        temp: temp
      });
    },function(errorMessage){
        alert(errorMessage);
        that.setState({
          isLoading:false
        });
    });
    // console.log(location);
    // this.setState({
    //   location: location,
    //   temp: 23
    // });
  },
  render: function(){
    var {isLoading, temp, location} = this.state;
    function render (){
      if(isLoading){
        return <h3>Fetching data...</h3>;
      }
      else if(temp&&location){
        return  <WeatherMessage temp={temp} location={location}/>;
      }
    };

    return (
      <div style={{textAlign:"center"}}>
        <h1>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {render()}
      </div>
    );
  }
});

module.exports = Weather;
