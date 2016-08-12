import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const styles = {
    headerItem: {
        display: 'inline-block',
        padding: '0 5px',
        marginBottom: '-1px',
        fontSize: '24px',
        color: 'black',
        textDecoration: 'none',
        cursor: 'pointer',
        border: '1px solid black'
    },
    acitveTab: {
        borderBottom: '1px solid #e0e0e0'
    }
}

export const { classes } = jss.createStyleSheet(styles).attach();
