function Hello(){
    let myName = 'Palak';
    let fullName = () => {
        return 'Palak Garg'
    }
    
    return <h3>Hello, My name is {myName} <br />
    Heyyy, Heyyy, {fullName()}</h3>
}

export default Hello;