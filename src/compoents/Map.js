const  Map= () => {
    return (
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
    );
}
const mapStyles = {
  width: '100%',
  height: '100%',
};
  
export default Map;