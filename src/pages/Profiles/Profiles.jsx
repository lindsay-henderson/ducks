import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import styles from "./Profiles.module.css"

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])


  return (
    <>
      <h1>Hello. This is a list of all the Birders.</h1>
      {profiles.length ? 
        <>
          <main className={styles.profilesList}>
            {profiles.map(profile => (
              <ProfileCard profile={profile} key={profile._id}/>
            ))}
          </main>
        </>
      :
        <p>No profiles yet</p>
      }
    </>
  )
}

export default Profiles