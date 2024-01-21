export const getHotelUser = () => {
    return fetch(`http://localhost:8000/users/hotelusers`, {
      method: "GET",
      headers: {
        Authorization: `Token ${localStorage.getItem("auth_token")}`,
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  export const editHotelUser = (hoteluserId, updatedHotelUser) => {
    return fetch(`http://localhost:8000/users/hotelusers/${hoteluserId}`, {
      method: "PUT",
      headers: {
        Authorization: `Token ${localStorage.getItem("auth_token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedHotelUser), // Use updatedHotelUser instead of hoteluserId
    });
  };
  

    export const deleteHotelUser = (hoteluserId) => {
        return fetch(`http://localhost:8000/users/hotelusers/${hoteluserId}`, 
        {
            method: "DELETE",
            headers: {
                Authorization: `Token ${localStorage.getItem("auth_token")}`,
            },
        })
    }

  