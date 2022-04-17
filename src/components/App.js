import React, { Component} from "react";
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from '../assets/profile.png'
import Title from './Title';
import Jokes from './Jokes';
import Header from './Header';

class App extends Component {
 constructor(){
     super();
     this.state =  { displayBio: false};
 
     this.readMore = this.readMore.bind(this);
     this.showLess = this.showLess.bind(this);
     this.toggleDisplay = this.toggleDisplay.bind(this);

    }


    readMore(){
      console.log('readMore this', this);
      this.setState({ displayBio: true });
   }

   showLess(){
    console.log('readMore this', this); 
    this.setState({ displayBio: false });
   }

   toggleDisplay()
   {
       this.setState({ displayBio: !this.state.displayBio });
   }

    render() {
      return(
          <div>
           <Header/> 
              <img src={profile} alt='profile' className='profile' />
              <h1>Hello! </h1>
              <p>My name is Ayush. </p>
                 {this.state.displayBio ? <Title /> : null}   
              <p>I'm always looking forward to working on meaningful project</p>
          {
              this.state.displayBio ? (
               <div>
                   <p> I live in MEerut UP</p>
                   <p>Mhy favourite language is JS</p>
                   <button onClick={this.toggleDisplay}>toggle state</button>
                   <button onClick={this.showLess}>Show less</button>
                   </div>     
              ) : (
                  <div>
                      <button onClick={this.readMore}>Read more</button>
                  </div>
              )
    }
    <hr/>
    <Projects></Projects>
    <hr/>
    <SocialProfiles></SocialProfiles>
           <hr/>
           <Jokes/>
                </div>
      )
  }
}

export default App