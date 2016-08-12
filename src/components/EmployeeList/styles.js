import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const styles = {
    employerList: {
        float: 'right',
        width: 'calc(100% - 240px)',
        textAlign: 'center'
    },
    employerHeader: {
        padding: '3px 50px',
        borderBottom: '1px solid'
    },
    employerItem: {
        padding: '3px 0px',
        borderBottom: '1px solid'
    },
    employersHead: {
        textAlign: 'center',
        textTransform: 'uppercase',
        borderBottom: '2px solid black'
    }
}

export const { classes } = jss.createStyleSheet(styles).attach();