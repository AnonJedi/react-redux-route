import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const styles = {
    header: {
        margin: '20px',
        textAlign: 'center',
        borderBottom: '1px solid black'
    }
}

export const { classes } = jss.createStyleSheet(styles).attach();
