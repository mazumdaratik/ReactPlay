import React from 'react'
import useGithub from './useGithub'

const GithubFinder = ({username}) => {
  
const {user, loading, error} = useGithub(username);

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