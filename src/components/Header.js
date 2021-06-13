import Button from "./Button"

const Header = () => {
    const onClick = () => {
        console.log('I just clicked');
    }

    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            <Button onClick={onClick} color='red' text='Hello'/>
        </header>
    )
}

export default Header
