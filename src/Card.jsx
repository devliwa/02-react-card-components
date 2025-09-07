import profilePic from './assets/avatar.jpeg'

function Card() {
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Devliwa</h2>
            <p className="card-text">I make website applications. </p>

        </div>
    );

}
export default Card