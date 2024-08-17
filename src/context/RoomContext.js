import React, { createContext, useContext, useState, useEffect } from 'react';

const RoomContext = createContext();

export const useRoom = () => useContext(RoomContext);

export const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch('/rooms.json')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Check if data is being fetched
        setRooms(data);
      })
      .catch(error => console.error('Error fetching the JSON file:', error));
  }, []);

  return (
    <RoomContext.Provider value={{ rooms }}>
      {children}
    </RoomContext.Provider>
  );
};
