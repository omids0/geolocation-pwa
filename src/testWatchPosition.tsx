import { useEffect, useState } from "react";

export default function TestWatchPosition(){
    const [userLocation, setUserLocation] = useState<{
        latitude: number;
        longitude: number;
      } | null>(null);

      useEffect(() => {
        if (navigator.geolocation) {
            const watchPosition = navigator.geolocation.watchPosition(
              (position) => {
                const { latitude, longitude } = position.coords;
                setUserLocation({ latitude, longitude });
              },
              (error) => {
                console.error("Error get user location: ", error);
              }
            );

            return () => navigator.geolocation.clearWatch(watchPosition)
            
          } else {
            console.log("Geolocation is not supported by this browser");
          } 
      }, [])


      return <div>
        <h1>Watch Position:</h1>
        {userLocation && (
        <div>
          <h2>User Location</h2>
          <p>Latitude: {userLocation.latitude}</p>
          <p>Longitude: {userLocation.longitude}</p>
        </div>
      )}
      </div>
}