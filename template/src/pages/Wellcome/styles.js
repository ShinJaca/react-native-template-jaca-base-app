import { StyleSheet } from 'react-native';

import { colors, metrics } from "!/styles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.monokai.bg,
        justifyContent: "center",
        alignItems: 'center',
    },
    list:{
        backgroundColor: colors.monokai.bg_h,
        padding: 10,
        

    },
    text: {
        color: colors.monokai.fg,
    },
    title: {
        color: colors.monokai.violet,
        fontSize: 18,
    },
    highlight: {
        color: colors.monokai.green,
    },
    dirStructure: {
        color: colors.monokai.bg_c,
    }

})

export default styles;