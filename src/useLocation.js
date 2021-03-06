import  {useState, useEffect} from 'react'

 export default () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // La matriz vacía hace referencia a que solo se va a ejecutar una vez

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrorMessage(err.message)
    );
  }, [])

  return [lat, errorMessage]
 }