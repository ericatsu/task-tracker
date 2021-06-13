import Button from "./Button"
const Header = () => {
    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            <Button color='red' text='Hello'/>
            <Button color='gold' text='Hey' />
            <Button color='green' text='Sap' />
        </header>
    )
}

export default Header
