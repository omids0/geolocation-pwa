import { useEffect, useState } from "react";

export default function TestWatchPosition(){
    const [userLocation, setUserLocation] = useState<{
        latitude: number;
        longitude: number;
        speed: number | null
      } | null>(null);

      useEffect(() => {
        if (navigator.geolocation) {
            const watchPosition = navigator.geolocation.watchPosition(
              (position) => {
                const { latitude, longitude, speed } = position.coords;
                setUserLocation({ latitude, longitude, speed });
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
          <p>Speed: {userLocation.speed}</p>
        </div>
      )}
      </div>
}