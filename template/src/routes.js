import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Wellcome from '!/pages/Wellcome';

const Routes = createAppContainer(createSwitchNavigator({
    Wellcome,
}))

export default Routes;