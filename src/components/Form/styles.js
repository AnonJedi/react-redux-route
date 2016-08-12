import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const styles = {
    addForm: {
        display: 'inline-block',
        float: 'left',
        padding: '15px',
        textAlign: 'center',
        border: '1px solid black'
    },
    formName: {
        display: 'inline-block',
        padding: '10px',
        fontSize: '20px'
    },
    formButton: {
        padding: '7px 35px'
    },
    formField: {
        display: 'block',
        width: '190px',
        padding: '5px',
        marginBottom: '12px',
        boxSizing: 'border-box'
    }
}

export const { classes } = jss.createStyleSheet(styles).attach();
