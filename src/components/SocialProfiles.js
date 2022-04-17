import React, { Component } from 'react';
import SOCIAL_PROFILE from '../data/socialProfile';


const SocialProfile = props => {
    
        const { link, image } = props.socialProfile;

        return(
        
                <span>

                <a href={link}><img src={image} alt='social-profile' style={{ width: 35, height: 35}} /></a>
           </span> 
            )
        }
    


const SocialProfiles = () => (
 // render(){
   //     return(
            <div>
                <h2>Connect with me!</h2>
                <div>
                    {
                        SOCIAL_PROFILE.map(SOCIAL_PROFILE => {
                            return <SocialProfile key ={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
                        })
                    }
                </div>
            </div>
        )
 //   }
//}

export default SocialProfiles;