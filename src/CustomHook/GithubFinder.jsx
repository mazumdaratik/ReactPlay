import React from 'react'
import { useState, useEffect } from 'react'


const GithubFinder = ({username}) => {
        const [user, setUser] = useState(null)
        const [error, setError] = useState(null)
        const [loading, setLoading] = useState(false)

  useEffect( () => {
//      
    const fetchData = async () => {
      setLoading(true);
      try {
              const response = await fetch(` https://api.github.com/users/${username}`);
              const responseData =  await response.json();
              console.log(responseData)
              setUser(responseData);
              setLoading(false);
      }   catch (error) {
              setError(error);
              setLoading(false);
      }
    }
               fetchData();
  }, [username])

  return (
    <div className='github-user'>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}

      {user && (
        <ul className='details'>
          <li>
            <img src={user.avatar_url} alt={user.login} />
          </li>
          <li>
            <strong>Name: </strong> {user.name}
          </li>
          <li>
            <strong>Bio:</strong> {user.bio ? user.bio : "N/A" }
          </li>
          <li>
            <strong>Location</strong> {user.location ? user.location : "N/A"}
            </li>
            <li>
              <strong>Blog: or Site</strong> {user.blog ? user.blog : "N/A"}
            </li>
            <li>
              <strong>Followers:</strong> {user.followers}
              </li>
            <li>
              <strong>Following:</strong> {user.following}
              </li>
              <li>
                <strong>Repositories:</strong> {user.public_repos}
              </li>
        </ul>
      )
      }
    </div>
  )
}

export default GithubFinder