import { IoAccessibility } from "react-icons/io5";
import './Accessibility.css'
function Accessibility() {
    return (
        /*on click this should open up a menu with accessibility options*/
        /*ideally the size param should be set to a variable whose value is set in the access. menu*/
        <div id="accessibilityButton">
            <IoAccessibility size={80} />
        </div>
    );
}
export default Accessibility;