const Navbar = ({ onSetIsClicked }) => {
    const clicked = () => {
        onSetIsClicked(1);
    }
    return (
        <div className="Navbar">
            <ul>
                <li><a className="brand">BlogSpot</a></li>
                <button onClick={clicked}className="button button1">Bloggers</button>
            </ul>
        </div>
    )
}
export default Navbar;